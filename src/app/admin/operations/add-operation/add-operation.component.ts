import { Component, OnInit } from "@angular/core";
import { Logistique } from "src/app/core/models/logistique";
import { Operation } from "src/app/core/models/operation";
import { OperationService } from "src/app/core/service/operation.service";

@Component({
  selector: "app-add-operation",
  templateUrl: "./add-operation.component.html",
  styleUrls: ["./add-operation.component.sass"],
})
export class AddOperationComponent implements OnInit {
  operation: Operation = new Operation();
  logistics: Logistique[] = [];

  constructor(private operationService: OperationService) {}

  ngOnInit(): void {}
}
