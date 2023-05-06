import { Component, Inject, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/service/auth.service"
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { User } from "src/app/core/models/user";

@Component({
  selector: "app-staff-profile",
  templateUrl: "./staff-profile.component.html",
  styleUrls: ["./staff-profile.component.sass"],
})

export class StaffProfileComponent implements OnInit {
  action: string;
  dialogTitle: string;
  staffForm: FormGroup;
  user: User;
  userFullName: string;
  userType: string;
  userEmail: string;
  
  constructor( 
    
    public authservice: AuthService,
    private fb: FormBuilder) {
      
      this.staffForm = this.createContactForm();
    }
  ngOnInit(): void {
    this.userFullName =
        this.authservice.currentUserValue.firstName +
        " " +
        this.authservice.currentUserValue.lastName;
        this.userType = this.authservice.currentUserValue.role;
        this.userEmail = this.authservice.currentUserValue.email;
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      
      idUser:[this.authservice.currentUserValue.id],
      nom: [this.authservice.currentUserValue.firstName],
      prenom: [this.authservice.currentUserValue.lastName],
      email: [this.authservice.currentUserValue.email],
      username:[this.authservice.currentUserValue.username],
      password: [this.authservice.currentUserValue.password],
      
    });
  
}

submit() {
  // emppty stuff
}
public confirmAdd(): void {
  this.authservice.updateprofile(this.authservice.currentUserValue.id,this.staffForm.getRawValue());
}
}
