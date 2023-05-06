import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { AppointmentService } from "../../appointment.service";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Appointment } from "../../appointment.model";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  appointmentForm: FormGroup;
  appointment: Appointment;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appointmentService: AppointmentService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      console.log(data.appointment);

      this.dialogTitle = data.appointment.name;
      this.appointment = data.appointment;
    } else {
      this.dialogTitle = "New Appointment";
      this.appointment = new Appointment({});
    }
    this.appointmentForm = this.createContactForm();
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
      id: [this.appointment.id],
      status: [this.appointment.statusRDV, [Validators.required]],
      
      date: [
        formatDate(this.appointment.date, "yyyy-MM-dd", "en"),
        [Validators.required],
      ],
      time: [this.appointment.time, [Validators.required]],
      suivi: [this.appointment.suivi, [Validators.required]],
      
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    if(this.appointment){
      console.log('edit')
      console.log(this.appointment.id)
      const formData = this.appointmentForm.value
      console.log(formData)
      let consultation={
       date: formData.date,
       time:formData.time,
       suivi:formData.suivi,
       statusRDV:formData.status
          }
   this.appointmentService.updateAppointment(this.appointment.id_consultation,consultation)
      //this.appointmentService.addAppointment(this.appointmentForm.getRawValue());
    }
    
    else{
      console.log('add')
      console.log(this.appointment.id)
      const formData = this.appointmentForm.value
      console.log(formData)
      let consultation={
       date: formData.date,
       time:formData.time,
       suivi:formData.suivi,
       statusRDV:formData.status
          }
          this.appointmentService.addAppointment(consultation)
    //  this.appointmentService.addAppointment(this.appointmentForm.getRawValue());
    }

    }
  }

    

