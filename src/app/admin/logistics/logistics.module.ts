import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListLogisticsComponent } from "./list-logistics/list-logistics.component";
import { EditLogisticComponent } from "./edit-logistic/edit-logistic.component";
import { AddLogisticComponent } from "./add-logistic/add-logistic.component";
import { LogisticsRoutingModule } from "./logistics-routing.module";

@NgModule({
  declarations: [
    ListLogisticsComponent,
    EditLogisticComponent,
    AddLogisticComponent,
  ],
  imports: [LogisticsRoutingModule, CommonModule],
})
export class LogisticsModule {}
