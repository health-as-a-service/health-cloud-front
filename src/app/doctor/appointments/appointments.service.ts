import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Appointments } from "./appointments.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import {Patient} from "../../doctor/patient"
@Injectable()
export class AppointmentsService extends UnsubscribeOnDestroyAdapter {
  private apiUrlFornewPatientAndDossier = 'http://localhost:8080/patientnewDossier/';
  
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
 
 
  private apiUrl = 'http://localhost:8080/patient'; // endpoint de votre projet Spring pour récupérer toutes les patients
  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.apiUrl);
  }


  addPatient(formData: FormData, dateNaissance:any) {
    // Replace the API endpoint with your actual backend API endpoint
    console.log("form data", formData)
    return this.httpClient.post(`${this.apiUrlFornewPatientAndDossier}${dateNaissance}`, formData);
  }

  updatePatient(formData: FormData, dateNaissance:any) {
    // Replace the API endpoint with your actual backend API endpoint
    console.log("form data", formData)
    return this.httpClient.put(`${this.apiUrl+'/'}${dateNaissance}`, formData);
  }

  deletePatient(id: number): Observable<any> {
    console.log("idddd",id)
    return this.httpClient.delete(`${this.apiUrl+'/'}${id}`);
  }

}
