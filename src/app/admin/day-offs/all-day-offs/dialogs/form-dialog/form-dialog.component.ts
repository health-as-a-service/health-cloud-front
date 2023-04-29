import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DayOffsService } from "../../../day-offs.service";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { formatDate } from "@angular/common";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { DayOff } from "../../../day-offs.model";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  dayOffForm: FormGroup;
  dayOff: DayOff;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dayOffService: DayOffsService,
    private fb: FormBuilder
  ) {
    this.action = data.action;
    console.log(data);
    if (this.action === "edit") {
      this.dialogTitle = "abcabc";
      this.dayOff = data.dayOff;
    } else {
      this.dialogTitle = "New DayOff";
      this.dayOff = new DayOff({});
    }
    this.dayOffForm = this.createContactForm();
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
      id:[this.dayOff.id],
        startDate: [
        formatDate(this.dayOff.startDate, "yyyy-MM-dd", "en"),
        [Validators.required],
      ],
      endDate: [
        formatDate(this.dayOff.endDate, "yyyy-MM-dd", "en"),
        [Validators.required],
      ],
      user: [this.dayOff.user],
      reason:[this.dayOff.reason],
      status: [this.dayOff.status]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.dayOffService.updateDayOff(this.dayOffForm.getRawValue());
  }
}
