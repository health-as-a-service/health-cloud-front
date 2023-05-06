import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Patient } from "./patient.model";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { environment } from "src/environments/environment";
@Injectable()
export class PatientService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/patient.json";
  isTblLoading = false;
  dataChange: BehaviorSubject<Patient[]> = new BehaviorSubject<Patient[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0YXNuaW0iLCJpYXQiOjE2ODMyNDU5NzEsImV4cCI6MTY4MzMzMjM3MX0.LY60gzPz1Oe2XuKOPmELPeLs2gBs2eFp3jD_YtlquTPwCa4q5QZGlVO2lFwn69IyQJpq-b-0DqwrFLiN-_xypg'

  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Patient[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllPatients(): Observable<any> {
    return this.httpClient.post<Patient[]>(`${environment.clinivaAuthUrl}/patients`, {
      role: ""
    })
    // .subscribe(
    //   (data) => {
    //     this.isTblLoading = false;
    //     console.log(data);
        
    //    this.dataChange.next(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.isTblLoading = false;
    //     console.log(error.name + " " + error.message);
    //   }
    // );
  }
  addPatient(patient: Patient): void {
    this.dialogData = patient;

    /*  this.httpClient.post(this.API_URL, patient).subscribe(data => {
      this.dialogData = patient;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updatePatient(patient: Patient): void {
    this.dialogData = patient;

    /* this.httpClient.put(this.API_URL + patient.id, patient).subscribe(data => {
      this.dialogData = patient;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deletePatient(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }

  addPatientServices(formData: FormData, dateNaissance:any) {
    console.log("form data", formData)
    return this.httpClient.post(`http://localhost:8082/patientnewDossier/`+dateNaissance, formData);
  }

  EditPatientServices(formData: FormData, dateNaissance:any) {
    // Replace the API endpoint with your actual backend API endpoint
    console.log("form data", formData)
    return this.httpClient.put(`http://localhost:8082/patient/`+dateNaissance, formData);
  }

  DeletePatientServices(id :any) {
    // Replace the API endpoint with your actual backend API endpoint
    return this.httpClient.delete('http://localhost:8082/patient/'+id);
  }

  getAllPatientsService(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  
    const httpOptions = { headers: headers };
    return this.httpClient.get('http://localhost:8082/patient' , httpOptions)
  }
  getAllPatientArchivesService(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
  
    const httpOptions = { headers: headers };
    return this.httpClient.get('http://localhost:8082/patientArchived' , httpOptions)
  }
}
