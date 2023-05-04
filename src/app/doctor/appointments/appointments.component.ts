import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AppointmentsService } from "./appointments.service";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Appointments } from "./appointments.model";
import { DataSource } from "@angular/cdk/collections";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MatMenuTrigger } from "@angular/material/menu";
import { SelectionModel } from "@angular/cdk/collections";
import { FormComponent } from "./form/form.component";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { MatTableDataSource } from "@angular/material/table";
import { PatientService } from "src/app/admin/patients/allpatients/patient.service";
import {Patient} from "../../doctor/patient"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from "@angular/material/select";
import { DatePipe } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.sass"],
})
export class AppointmentsComponent implements OnInit
{


  displayedColumns: string[] = ['idP', 'nomP', 'prenomP','sexe', 'numTel', 'chambre','sejour','actions'];
  dataSource: MatTableDataSource<any>;
  pageSize = 10;
  pageIndex = 0;
  length = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private patientService: AppointmentsService,
    private dialog: MatDialog,
    private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router,
    private datePipe: DatePipe,) {

   }

   openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentsComponent, {
      width: '500px',
      data: new Patient()
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

 

  options = [
    {value: 'option1', viewValue: 'Option 1'},
    {value: 'option2', viewValue: 'Option 2'},
    {value: 'option3', viewValue: 'Option 3'}
  ];

  loadData(): void {
    this.patientService.getPatients().subscribe(data => {
      console.log("data = ",data)
      this.patients=data
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data: Patient, filter: string) => {
      const dataStr = data.idP + data.nomP + data.prenomP;
      return dataStr.toLowerCase().indexOf(filter) !== -1;
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }


 



   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }





  date=''
  patients!: any []
  //patient: Patient = new Patient();
  patient:any={"nomP":"","prenomP":"","chambre":0,"sexe":"","numTel":"",
  "sejour":0, "dossierMedical": {"typeMaladie": "","traitement": "",
    "maladiesChroniques": "","testsMedicaux": ""},"isArchive":false}
  isUpdate:boolean=false;

  singleFile!: File;
  multipleFiles!: File[];
  jsonObject!: string;
  showModal=false


  onSingleFileChange(event: any) {
    this.singleFile = event.target.files[0];
  }

  onMultipleFilesChange(event: any) {
    this.multipleFiles = event.target.files;
  }


  openPopupForCreate() {
    this.isUpdate=false;
    this.showModal = true;
  }

  openPopupForUpdate(patienttoupdate:any) {
    console.log("patiennnnt", patienttoupdate)
    this.patient.isArchive=patienttoupdate.isArchive
    this.patient=patienttoupdate
    this.showModal = true;
    this.isUpdate=true
    console.log("patiennnnt",  this.patient)


  }

  closePopupForCreate() {
    this.showModal = false;
  }

  closePopupForUpdate() {
    this.isUpdate=false
    this.showModal = false;
    this.patient={"nomP":"","prenomP":"","chambre":0,"sexe":"","numTel":"",
"sejour":0, "dossierMedical": {"typeMaladie": "hello","traitement": "hello",
  "maladiesChroniques": "hello","testsMedicaux": "hello"},"isArchive":false}

  }

  onSubmit() {

    const regex = /^[0-9]{8}$/;
  if (!regex.test(this.patient.numTel)) {
    // afficher un message d'erreur
    this.openSnackBar('Numéro de téléphone invalide !', '');
return
  }
  console.log("patietn lenght", this.patients.length)
  console.log("patiets", this.patients)
  console.log("patiet", this.patient)

  console.log("isupadate, ", this.isUpdate)
  if(!this.isUpdate){

    for (let index = 0; index < this.patients.length; index++) {
      if(this.patients[index].chambre===Number(this.patient.chambre)){
        console.log("occupée")
        this.openSnackBar('Nous sommes désolés, mais cette chambre est occupée !', '');

          return
      }
    
  }


  }

    if ('dateArchivage' in this.patient) {
      delete this.patient.dateArchivage;
    }
    if ('dateCreation' in this.patient) {
      delete this.patient.dateCreation;
    }
    if ('dateNaissanceP' in this.patient) {
      delete this.patient.dateNaissanceP;
    }
    if ('dateArchivage' in this.patient) {
      delete this.patient.dateArchivage;
    }
    if ('dateCreation' in this.patient.dossierMedical) {
      delete this.patient.dossierMedical.dateCreation;
    }
    if ('derniereMaj' in this.patient.dossierMedical) {
      delete this.patient.dossierMedical.derniereMaj;
    }

    console.log("patieeeent", this.patient)
    const formData = new FormData();
    if (this.singleFile) {
      formData.append('patientfile', this.singleFile);
    }
    if (this.patient) {
      formData.append('patient', JSON.stringify(this.patient));
    }
if(!this.isUpdate){
  this.patientService.addPatient(formData, this.datePipe.transform(this.date, 'yyyy-MM-dd'))
      .subscribe(patient => {

        this.patient={"nomP":"","prenomP":"","chambre":0,"sexe":"","numTel":"",
        "sejour":0, "dossierMedical": {"typeMaladie": "hello","traitement": "hello",
          "maladiesChroniques": "hello","testsMedicaux": "hello"},"isArchive":false}
       //refreshing page
       this.openSnackBar('Created successfully !', 'Succès');

       setTimeout(() => {
        this.loadData();

      }, 2000);
      }, error => {
        setTimeout(() => {
          this.loadData();

        }, 2000);

      });
}else{
  this.patientService.updatePatient(formData, this.datePipe.transform(this.date, 'yyyy-MM-dd'))
  .subscribe(patient => {

    this.patient={"nomP":"","prenomP":"","chambre":0,"sexe":"","numTel":"",
    "sejour":0, "dossierMedical": {"typeMaladie": "hello","traitement": "hello",
      "maladiesChroniques": "hello","testsMedicaux": "hello"},"isArchive":false}
      this.openSnackBar('Updated successfully !', 'Succès');

      //refreshing page
      setTimeout(() => {
        this.loadData();

      }, 2000);

  }, error => {
    setTimeout(() => {
      this.loadData();

    }, 2000);
  });
}
   




  
    this.showModal = false;
    

  }



  getPatients(): void {
    this.patientService.getPatients()
      .subscribe(patients => {this.patients = patients; 
      });

  }
  

  public deletePatient(id: number) {
    console.log(id);
   // if (confirm('Are you sure you want to delete this Store?')) {
      this.patientService.deletePatient(id).subscribe(() => {
        this.openSnackBar('Deleted successfully !', 'Succès');
        this.loadData();

      });
  //  }
  }
  openAddPatientModal() {
    // Code pour ouvrir la fenêtre modale
    this.router.navigate(['/patient/add']);
  }


  numTelIncorrect: boolean=false;
  verifierNumTel() {
    const regex = /^[0-9]{8}$/;
  if (!regex.test(this.patient.numTel)) {
    // afficher un message d'erreur
    console.log("Le numéro de téléphone doit être une chaîne numérique de 8 chiffres.");
    return;
  }
  }

  chambreExists:boolean=false
  chambreEvent(){


  }




  searchText: string = '';
 






  }
   
 
