import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Logistique } from "src/app/core/models/logistique";
import { LogisticsService } from "src/app/core/service/logistics.service";

@Component({
  selector: "app-add-logistic",
  templateUrl: "./add-logistic.component.html",
  styleUrls: ["./add-logistic.component.sass"],
})
export class AddLogisticComponent implements OnInit {
  private sub: Subscription;
  editLogiForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private logServ: LogisticsService
  ) {}

  onSubmit() {
    let value = this.editLogiForm.value;

    this.logServ.addLogistique(value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("error updating operation!");
        alert("Failed !");
      },
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
