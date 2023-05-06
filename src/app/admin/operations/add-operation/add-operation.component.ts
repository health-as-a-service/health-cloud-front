import { Component, OnInit } from "@angular/core";
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

  constructor(
    private operationService: OperationService,
    private logsService: LogisticsService
  ) {}

  ngOnInit(): void {
    this.fetchLogistics();
    this.fetchDoctors();
  }

  private fetchLogistics() {}

  private fetchDoctors() {}
}
