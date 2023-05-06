import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subscription } from "rxjs";
import { Logistique } from "src/app/core/models/logistique";
import { Operation } from "src/app/core/models/operation";
import { User } from "src/app/core/models/user";
import { LogisticsService } from "src/app/core/service/logistics.service";
import { OperationService } from "src/app/core/service/operation.service";

@Component({
  selector: "app-add-operation",
  templateUrl: "./add-operation.component.html",
  styleUrls: ["./add-operation.component.sass"],
})
export class AddOperationComponent implements OnInit {
  operation: Operation;
  logistics: Logistique[] = [];
  docs: User[] = [];
  addOpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private operationService: OperationService,
    private logsService: LogisticsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchLogistics();
    this.fetchDoctors();
    this.addOpForm = this.fb.group({
      nomChi: ["", [Validators.required]],
      nomP: ["", [Validators.required]],
      dateOp: ["", [Validators.required]],
      typeOp: ["", [Validators.required]],
      emailP: ["", [Validators.required, Validators.email]],
      success: [false],
    });
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  private fetchLogistics() {}

  private fetchDoctors() {}
}
