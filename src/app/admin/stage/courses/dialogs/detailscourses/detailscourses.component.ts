import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DayOff } from 'src/app/admin/day-offs/day-offs.model';
import { AllcoursesService } from '../../../allcourses.service';
import { Allcourses } from '../../../allcourses';

@Component({
  selector: 'app-detailscourses',
  templateUrl: './detailscourses.component.html',
  styleUrls: ['./detailscourses.component.sass']
})
export class DetailscoursesComponent implements OnInit {
  dialogTitle: string;
  course: Allcourses
  statusUpdated = new EventEmitter<string>();
  
  constructor(
    public dialogRef: MatDialogRef<DetailscoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public coursesservice: AllcoursesService,
  ) {
    this.dialogTitle= "Courses Details"
      this.course = data.course;
   }

   onNoClick(): void {
    this.dialogRef.close();
  }

  
  onAcceptClick(id: string) {
    
   }
 
   onRejectClick(id: string) {
    
   }

  ngOnInit(): void {
  }

}
