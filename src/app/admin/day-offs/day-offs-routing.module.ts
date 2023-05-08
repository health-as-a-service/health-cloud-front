import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PendingComponent } from "./pending/pending.component"


const routes: Routes = [
  {
    path: "pending",
    component: PendingComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayOffsRoutingModule {}
