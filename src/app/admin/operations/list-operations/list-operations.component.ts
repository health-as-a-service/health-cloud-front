import { Component, OnInit } from "@angular/core";
import { Operation } from "src/app/core/models/operation";
import { OperationService } from "src/app/core/service/operation.service";

@Component({
  selector: "app-list-operations",
  templateUrl: "./list-operations.component.html",
  styleUrls: ["./list-operations.component.sass"],
})
export class ListOperationsComponent implements OnInit {
  operations: Operation[] = [];
  filteredOperations: Operation[] = [];
  selectedOperation: Operation | null = null;
  searchTerm: string = "";
  successRates: Map<string, number> = new Map<string, number>();
  sortingCriteria: string = "";

  constructor(private operationService: OperationService) {}

  ngOnInit() {
    this.getAllOperations();
    this.getSuccessRatesByType();
  }

  getAllOperations() {
    this.operationService.getAllOperations().subscribe(
      (data) => {
        this.operations = data;
        this.sortOperations();
        this.filterOperations();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sortOperations() {
    if (this.sortingCriteria) {
      const criteriaArray = this.sortingCriteria.split("-");
      const isDescending = this.sortingCriteria.startsWith("-");

      this.operations.sort((a, b) => {
        for (let i = 0; i < criteriaArray.length; i++) {
          const field = criteriaArray[i];

          if (field === "dateOp") {
            const compareResult =
              a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
            if (compareResult !== 0) {
              return isDescending ? -compareResult : compareResult;
            }
          } else if (field === "typeOp") {
            const compareResult =
              a[field].toLowerCase() > b[field].toLowerCase()
                ? 1
                : a[field].toLowerCase() < b[field].toLowerCase()
                ? -1
                : 0;
            if (compareResult !== 0) {
              return isDescending ? -compareResult : compareResult;
            }
          }
        }
        // If all criteria match, sort by idOp
        return isDescending ? b.idOp - a.idOp : a.idOp - b.idOp;
      });
    }
  }

  filterOperations() {
    if (this.searchTerm) {
      this.filteredOperations = this.operations.filter(
        (operation) =>
          operation.typeOp &&
          operation.typeOp.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredOperations = this.operations;
    }
  }

  getSuccessRatesByType() {
    this.operationService.getSuccessRatesByType().subscribe(
      (rates) => {
        this.successRates = rates;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteOperation(id: number) {
    this.operationService.deleteOperation(id).subscribe(
      () => {
        this.operations = this.operations.filter((o) => o.idOp !== id);
        this.sortOperations();
        this.filterOperations();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  setSortingCriteria(criteria: string) {
    if (this.sortingCriteria === criteria) {
      // toggle sorting direction
      this.sortingCriteria = "-" + criteria;
    } else {
      this.sortingCriteria = criteria;
    }
    this.sortOperations();
    this.filterOperations();
  }

  clearSortingCriteria() {
    this.sortingCriteria = "";
    this.sortOperations();
    this.filterOperations();
  }
}
