import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder} from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-formdialogcourses',
  templateUrl: './formdialogcourses.component.html',
  styleUrls: ['./formdialogcourses.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FormdialogcoursesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormdialogcoursesComponent>,
    private fb: FormBuilder,
    private http: HttpClient
    
  ) { }

  ngOnInit(): void {

  }

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
