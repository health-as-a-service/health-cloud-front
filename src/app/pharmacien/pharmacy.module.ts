import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PharmacyRoutingModule } from "./pharmacy-routing.module";
import { PharmacyComponent } from "./pharmacy/medicine-list/medicine-list.component";
import { AddMedicineComponent } from "./pharmacy/add-medicine/add-medicine.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormDialogComponent } from "./pharmacy/medicine-list/dialog/form-dialog/form-dialog.component";
import { DeleteDialogComponent } from "./pharmacy/medicine-list/dialog/delete/delete.component";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatTabsModule } from "@angular/material/tabs";
import { MedicineListService } from "./pharmacy/medicine-list/medicine-list.service";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatMenuModule } from "@angular/material/menu";
@NgModule({
  declarations: [
    PharmacyComponent,
    AddMedicineComponent,
    FormDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    PharmacyRoutingModule,
    FormsModule,
    chartjsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MaterialFileInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [MedicineListService],
})
export class PharmacyModule {}
