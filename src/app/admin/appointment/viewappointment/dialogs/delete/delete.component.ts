import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { AppointmentService } from "../../appointment.service";
@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.sass"],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appointmentService1: AppointmentService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  // confirmDelete(): void {
  //   this.appointmentService1.deleteAppointment(this.data.id);
  // }

  confirmDelete(): void {
    console.log(this.data)
    this.appointmentService1.deleteAppointment(this.data.id_consultation);
  }
}








