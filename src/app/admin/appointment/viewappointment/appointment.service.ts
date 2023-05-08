import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Appointment } from "./appointment.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class AppointmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/appointment.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<Appointment[]> = new BehaviorSubject<
    Appointment[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  apiUrl='http://localhost:8082/consultations/allConsultation'
  apiurldel='http://localhost:8082/consultations/'
  get data(): any {
    return this.httpClient.get<any>(this.apiUrl)
   // return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllAppointments(): void {
    this.subs.sink = this.httpClient.get<Appointment[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }
  ADD_URL='http://localhost:8082/consultations/addConsultation'
  addAppointment(appointment: any): void {
    this.dialogData = appointment;

    this.dialogData = appointment;

     this.httpClient.post(this.ADD_URL, appointment).subscribe(data => {
      this.dialogData = appointment;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
    /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
      this.dialogData = appointment;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  EDIT_URL='http://localhost:8082/consultations/'
  updateAppointment(id:any,appointment: any): void {
    this.dialogData = appointment;

     this.httpClient.put(this.EDIT_URL + id, appointment).subscribe(data => {
      this.dialogData = appointment;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteAppointment(id: number): void {
    this.httpClient.delete<any>(this.apiurldel + id).subscribe(
      (data) => {
        // Remove the deleted appointment from the data source
        const index = this.dataChange.value.findIndex((appointment: Appointment) => appointment.id === id);
        if (index > -1) {
          this.dataChange.value.splice(index, 1);
          this.dataChange.next(this.dataChange.value);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + " " + error.message);
      }
    );
  }
}
