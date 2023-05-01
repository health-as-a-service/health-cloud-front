import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Staff } from "./staff.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class StaffService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "http://localhost:8082/User";
  isTblLoading = true;
  dataChange: BehaviorSubject<Staff[]> = new BehaviorSubject<Staff[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Staff[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStaffs(): void {
    this.subs.sink = this.httpClient.get<Staff[]>(this.API_URL).subscribe(
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
  addStaff(staff: Staff): void {
    this.dialogData = staff;

    /*  this.httpClient.post(this.API_URL, staff).subscribe(data => {
      this.dialogData = staff;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateStaff(staff: Staff): void {
    this.dialogData = staff;

    /* this.httpClient.put(this.API_URL + staff.id, staff).subscribe(data => {
      this.dialogData = staff;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteStaff(idUser: number): void {
    console.log(idUser);

      this.httpClient.delete<Staff[]>(this.API_URL+ `/${idUser}` ).subscribe(data => {
      console.log(idUser);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
}
