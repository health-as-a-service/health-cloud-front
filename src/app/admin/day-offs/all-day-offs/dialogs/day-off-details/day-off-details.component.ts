import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DayOff } from '../../../day-offs.model';

@Component({
  selector: 'app-day-off-details-dialog',
  templateUrl: './day-off-details.component.html',
  styleUrls: ['./day-off-details.component.sass']
})
export class DayOffDetailsDialogComponent {

  dialogTitle: string;
  dayOff: DayOff

  constructor(
    public dialogRef: MatDialogRef<DayOffDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {dayOff: DayOff} ) {
      this.dialogTitle= "Day Off Details"
      this.dayOff = data.dayOff;
      console.log(this.dayOff)
    }


     
  onNoClick(): void {
  
    this.dialogRef.close();
  }


}
