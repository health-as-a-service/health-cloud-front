import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Logistique } from "src/app/core/models/logistique";
import { LogisticsService } from "src/app/core/service/logistics.service";

@Component({
  selector: "app-edit-logistic",
  templateUrl: "./edit-logistic.component.html",
  styleUrls: ["./edit-logistic.component.sass"],
})
export class EditLogisticComponent implements OnInit {
  private id: number;
  private sub: Subscription;
  private fetched: Logistique;
  editLogiForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private logServ: LogisticsService
  ) {}

  onSubmit() {
    let value = this.editLogiForm.value;

    value = { ...this.fetched, ...value };

    this.logServ.updateLogistique(value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("error updating operation!");
        alert("Failed !");
      },
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
    });
    this.fetchData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchData() {
    this.logServ.getLogistiqueById(this.id).subscribe({
      next: (l) => {
        this.fetched = l;
        this.editLogiForm = this.fb.group({
          typeLogi: [l.typeLogi, [Validators.required]],
          nomLogi: [l.nomLogi, [Validators.required]],
          nombreLogits: [l.nombreLogits, [Validators.required]],
        });
      },
      error: (err) => {},
    });
  }
}
