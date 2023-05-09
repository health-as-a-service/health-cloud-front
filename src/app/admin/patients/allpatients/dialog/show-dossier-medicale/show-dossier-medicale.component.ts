import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { PatientService } from "../../patient.service";

@Component({
  selector: 'app-show-dossier-medicale',
  templateUrl: './show-dossier-medicale.component.html',
  styleUrls: ['./show-dossier-medicale.component.sass']
})
export class ShowDossierMedicaleComponent  {
  constructor(
    public dialogRef: MatDialogRef<ShowDossierMedicaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public patientService: PatientService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  

}
