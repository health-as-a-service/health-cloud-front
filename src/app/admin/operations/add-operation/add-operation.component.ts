import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Logistique } from "src/app/admin/logistics/model/logistique";
import { Operation } from "src/app/admin/operations/model/operation";
import { Role } from "src/app/core/models/role";
import { LogisticsService } from "src/app/core/service/logistics.service";
import { OperationService } from "src/app/core/service/operation.service";

@Component({
  selector: "app-add-operation",
  templateUrl: "./add-operation.component.html",
  styleUrls: ["./add-operation.component.sass"],
})
export class AddOperationComponent implements OnInit {
  operation: Operation;
  addOpForm: FormGroup;
  docNames: string[] = [];
  operations: Operation[] = [];
  selectedLogistics = new FormControl("");
  defaultLogistics: Logistique[] = [];

  constructor(
    private fb: FormBuilder,
    private operationService: OperationService,
    private logsService: LogisticsService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.addOpForm = this.fb.group({
      nomP: ["", [Validators.required]],
      dateOp: ["", [Validators.required]],
      typeOp: ["", [Validators.required]],
      nomChi: [""],
      idChambre: [0],
      emailP: ["", [Validators.required, Validators.email]],
      success: [false],
    });
    this.fetchLogistics();
    this.fetchDoctors();
    this.fetchOps();
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit() {
    if (
      this.selectedLogistics.value.filter((l) => l.nombreLogi == 0).length > 0
    ) {
      this.openSnackBar("Logistics are CLAWZED", "🤡");
      return;
    } else {
      const nomChir = { nomChi: this.addOpForm.value.nomChi[0] };
      const value = {
        ...this.addOpForm.value,
        ...nomChir,
      };
      this.operationService
        .addOperation(
          value,
          this.selectedLogistics.value.map((l) => l.idLogi)
        )
        .subscribe({
          next: (v) => {
            this.openSnackBar("Operation saved!", "✅");
          },
          error: (_) => {
            this.openSnackBar("Operation not saved!", "❌");
          },
        });
    }
  }

  private fetchLogistics() {
    this.logsService.getAllLogistiques().subscribe({
      next: (v) => (this.defaultLogistics = v),
    });
  }

  private fetchDoctors() {
    this.operationService.getAllUsers().subscribe({
      next: (v) => {
        this.docNames = v
          .filter((user) => user.role[0]["name"] === Role.Doctor)
          .map((d) => d["nom"]);
      },
    });
  }

  private fetchOps() {
    this.operationService.getAllOperations().subscribe({
      next: (v) => {
        this.operations = v;
      },
    });
  }

  filterDocsPerDateGiven() {
    if (this.addOpForm.value.nomChi[0]) {
      let v = new Date(`${this.addOpForm.value.dateOp}`)
        .toLocaleString()
        .split(", ")[0]
        .replace("/", "-")
        .replace("/", "-")
        .split("-");

      const finalDate = `${v[2]}-${v[0]}-${v[1]}`;

      let isValid1 = this.operations
        .map((op) => op.dateOp.toString())
        .includes(finalDate);

      let isValid2 = this.operations
        .map((op) => op.nomChi.toLowerCase())
        .includes(this.addOpForm.value.nomChi[0].toLowerCase());

      console.log(this.addOpForm.value.nomChi[0].toLowerCase());

      if (isValid1 && isValid2) {
        this.openSnackBar("Invalid date or doctor!", "❌");
      }
    }
  }
}
