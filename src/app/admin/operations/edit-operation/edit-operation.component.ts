import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Operation } from "src/app/core/models/operation";
import { OperationService } from "src/app/core/service/operation.service";

@Component({
  selector: "app-edit-operation",
  templateUrl: "./edit-operation.component.html",
  styleUrls: ["./edit-operation.component.sass"],
})
export class EditOperationComponent implements OnInit {
  private id: number = 0;
  private sub: Subscription;
  toUpdate: Operation;
  editOpForm: FormGroup;
  success: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private opServ: OperationService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
    });
    this.fetchData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    // fill toUpdate
    // send it to backend
    // display beautiful toast / sweetalert lol
  }

  fetchData() {
    this.opServ.getOperationById(this.id).subscribe({
      next: (l) => {
        this.success = l.success;
        this.editOpForm = this.fb.group({
          nomChi: [l.nomChi, [Validators.required]],
          nomP: [l.nomP, [Validators.required]],
          dateOp: [l.dateOp, [Validators.required]],
          typeOp: [l.typeOp, [Validators.required]],
          emailP: [l.emailP, [Validators.required, Validators.email]],
        });
      },
      error: (err) => {},
    });
  }
}
