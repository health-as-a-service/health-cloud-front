import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { PatientService } from "../../patient.service";
import { MatSnackBar } from "@angular/material/snack-bar";

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Patient } from "../../patient.model";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  patientForm: FormGroup;
  patient: any;
  singleFile!: File;
  storeSataForEdit : any
  myFiles: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,

  ) {
    // Set the defaults
    console.log('tagggggggggg' , data)
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.patient.name;
      this.patient = data.patient;
      this.storeSataForEdit = this.patient
      console.log(this.patient)
    } else {
      this.dialogTitle = "New Patient";
      this.patient = {
        "idP": null,
        "nomP": null,
        "prenomP": null,
        "sexe": null,
        "numTel": null,
        "chambre": null,
        "sejour": null,
        "dossierMedical": {
            "typeMaladie": null,
            "traitement": null,
            "maladiesChroniques": null,
            "testsMedicaux": null,
        },
      }
    }
    this.patientForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
        ? "Not a valid email"
        : "";
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      nomP: [this.patient.nomP],
      prenomP: [this.patient.prenomP],
      sexe: [this.patient.sexe],
      dateNaissanceP: [this.patient.dateNaissanceP],
      numTel: [this.patient.numTel],
      chambre: [this.patient.chambre],
      sejour: [this.patient.sejour],
      maladiesChroniques: [this.patient.maladiesChroniques],
      testsMedicaux: [this.patient.dossierMedical.testsMedicaux],
      traitement: [this.patient.dossierMedical.traitement],
      typeMaladie: [this.patient.dossierMedical.typeMaladie]
    });
   


  }

  onSingleFileChange(e: any) {
    this.myFiles = [];
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
    this.singleFile = e.target.files[0];
    console.log(this.singleFile)
  }

  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmEdit() {

  }
  public confirmAdd(): void {
    var itemDeteNaissance = this.patientForm.value.dateNaissanceP

   

    console.log('tag',this.storeSataForEdit)

    // }
    const formData = new FormData();
    if (this.action === 'edit') {
      if (this.singleFile) {
        formData.append('patientfile', this.singleFile);

       
      }

      if (this.patient) {
        this.patient.dateArchivage = this.storeSataForEdit.dateArchivage
        const objEdit = {
          "idP" : this.storeSataForEdit.idP,
          "nomP": this.patientForm.value.nomP,
          "prenomP": this.patientForm.value.prenomP,
          "sexe": this.patientForm.value.sexe,
          "numTel": this.patientForm.value.numTel,
          "chambre": this.patientForm.value.chambre,
          "sejour": this.patientForm.value.sejour,
          "dossierMedical": {
            //"idD": this.storeSataForEdit.dossierMedical.idD,
            "typeMaladie": this.patientForm.value.typeMaladie,
          //  "traitement": this.patientForm.value.traitement,
           // "maladiesChroniques": this.patientForm.value.maladiesChroniques,
           // "testsMedicaux": this.patientForm.value.testsMedicaux,
          }
        }
      //nnnnnn fech tamel ! aleh tajouti f user jdid !! aman token expiré nnnn taamel signin much sing up att
        console.log('test' , objEdit)
        formData.append('patient', JSON.stringify(objEdit));
        this.patientService.EditPatientServices(formData ,itemDeteNaissance ).subscribe(res=>{
          console.log('ok' , res)
        })

      }
    } else {
      console.log('my b', this.singleFile)
      console.log('8', this.patientForm.value)
      // this.patientForm.value.


      // this.patientForm.value.dossierMedical = {
      //   "typeMaladie": "haha"
      // }
      const obj = {
        "nomP": this.patientForm.value.nomP,
        "prenomP": this.patientForm.value.prenomP,
        "sexe": this.patientForm.value.sexe,
        "numTel": this.patientForm.value.numTel,
        "chambre": this.patientForm.value.chambre,
        "sejour": this.patientForm.value.sejour,
        "dossierMedical": {
          "typeMaladie": this.patientForm.value.typeMaladie,
          "traitement": this.patientForm.value.traitement,
          "maladiesChroniques": this.patientForm.value.maladiesChroniques,
          "testsMedicaux": this.patientForm.value.testsMedicaux,
        }
      }



      if (this.singleFile) {
        formData.append('patientfile', this.singleFile);
      }
      if (this.patient) {
        formData.append('patient', JSON.stringify(obj));
      }

      console.log(this.patientForm.value)

      delete this.patientForm.value.dateNaissanceP

      this.patientService.addPatientServices(formData, itemDeteNaissance).subscribe(res => {
        console.log(res)
        
      })
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
