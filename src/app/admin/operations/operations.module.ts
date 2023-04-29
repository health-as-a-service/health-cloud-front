import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListOperationsComponent } from "./list-operations/list-operations.component";
import { AddOperationComponent } from "./add-operation/add-operation.component";
import { EditOperationComponent } from "./edit-operation/edit-operation.component";
import { OperationsRoutingModule } from "./operations-routing.module";

@NgModule({
  declarations: [
    ListOperationsComponent,
    AddOperationComponent,
    EditOperationComponent,
  ],
  imports: [OperationsRoutingModule, CommonModule],
})
export class OperationsModule {}
