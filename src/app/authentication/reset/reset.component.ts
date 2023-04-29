import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ResetPass } from "./reset.service"


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.sass']
})
export class ResetComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  loading = false;
  hide = true;
  returnUrl: string;
  errormessage: String;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private resetpass: ResetPass
    
  ) {
    
   }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      newPassword:[Validators.required],
      confirmPassword:[Validators.required],
      

    })
    ;
  
  }
  get f() {
    return this.authForm.controls;
  }
  
  onSubmit(): void {
     
    this.submitted = true;

    if (this.authForm.invalid) {
      return;
    } else {
      this.loading = true;
  
      this.resetpass.reset(this.f.email.value,this.f.newPassword.value,this.f.confirmPassword.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(["/authentication/signin"]);
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
  
      // Trigger form submission
      const form = document.forms["authForm"];
      form.submit();
    }
  }
    
      
}
  


