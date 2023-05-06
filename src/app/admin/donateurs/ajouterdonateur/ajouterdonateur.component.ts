import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DonateurService } from '../donateur.service';

@Component({
  selector: 'app-ajouterdonateur',
  templateUrl: './ajouterdonateur.component.html',
  styleUrls: ['./ajouterdonateur.component.sass']
})
export class AjouterdonateurComponent  {
  donateurlistform: FormGroup;
  id:number

  

  constructor(private fb: FormBuilder ,private donateurService: DonateurService) {

    this.donateurlistform = this.fb.group({
      //m_no: [""],
      nomDonateur :null,
      prenomDonateur:null,
      adresse:null,
      numeroTelephone:null,
      typeS:null,
      quantiteTotale:null,
      dernierDon:null,
    
    });

  }
  

  onSubmit() {
    //console.log("Form Veeeeeeeeeeeeeeeeeeeeealue", this.donateurlistform.value);
    console.log("Form Value", this.donateurlistform.value);
    this.add();
  }
  
  add() {
    // id:number
    if (this.donateurlistform.valid) {
      const formData = this.donateurlistform.value;
      if (this.donateurlistform.value.typeS==("A_NEGATIF"))
      {this.id=1}
      else if (this.donateurlistform.value.typeS==("A_POSITIF"))
      {this.id=2}
      //terminate 
      this.donateurService.addDonateur(this.id,formData).subscribe(
        response => {
          console.log("Donateur added successfully", response);
          // Reset the form after adding the donateur
          this.donateurlistform.reset();
        },
        error => {
          console.log("Error adding donateur", error);
        }
      );
    } else {
      console.log("Invalid form data");
    }
  }
}
//




