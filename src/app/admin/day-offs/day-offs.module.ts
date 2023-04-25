import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingComponent } from './pending/pending.component';
import { DayOffsRoutingModule } from './day-offs-routing.module'
import { SharedModule } from "src/app/shared/shared.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    PendingComponent
  ],
  imports: [
    CommonModule,
    DayOffsRoutingModule,
    SharedModule,
    ComponentsModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
 
    

  ]
})
export class DayOffsModule {}
