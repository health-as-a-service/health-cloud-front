import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLogisticsComponent } from './list-logistics/list-logistics.component';
import { EditLogisticComponent } from './edit-logistic/edit-logistic.component';



@NgModule({
  declarations: [
    ListLogisticsComponent,
    EditLogisticComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LogisticsModule { }
