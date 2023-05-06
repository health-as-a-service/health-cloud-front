import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AllcoursesService } from '../../../allcourses.service';
@Component({
  selector: 'app-deletecourses',
  templateUrl: './deletecourses.component.html',
  styleUrls: ['./deletecourses.component.sass']
})
export class DeletecoursesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletecoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public coursesservice: AllcoursesService
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    
  }
}
