import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOperationsComponent } from './list-operations/list-operations.component';
import { AddOperationComponent } from './add-operation/add-operation.component';



@NgModule({
  declarations: [
    ListOperationsComponent,
    AddOperationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OperationsModule { }
