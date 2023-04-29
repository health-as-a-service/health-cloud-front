import { Component, OnInit } from "@angular/core";
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
  private toUpdate: Operation;
  private sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private opServ: OperationService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
      console.log(this.id);
    } );
    this.fetchData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  fetchData() {
    this.opServ.getOperationById(this.id).subscribe({
      next: (l) => {
        this.toUpdate = l;
        alert(JSON.stringify(l));
      },
      error: (err) => {},
    });
  }
}
