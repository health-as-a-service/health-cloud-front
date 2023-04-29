import { Component, OnInit } from "@angular/core";
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
  private toUpdate: Logistique;
  constructor(
    private route: ActivatedRoute,
    private logServ: LogisticsService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
    });
    this.fetchData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchData() {
    this.logServ.getLogistiqueById(this.id).subscribe({
      next: (l) => {
        this.toUpdate = l;
      },
      error: (err) => {},
    });
  }
}
