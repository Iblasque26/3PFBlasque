import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AbmDialogComponent } from "./layouts/dashboard/pages/abm-dialog/abm-dialog.component";
import { DialogConfirmarComponent } from "./layouts/dashboard/pages/dialog-confirmar/dialog-confirmar.component";
import { AppRoutingModule } from "./app-routing.module";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardModule } from "./layouts/dashboard/dashboard.module";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule, MatSelectTrigger } from "@angular/material/select";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AbmDialogComponent,
    DialogConfirmarComponent
  ],
  imports: [
    
    AppRoutingModule,
    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DashboardModule,
    MatOptionModule,
    MatSelectTrigger,
    MatPaginatorModule,
    MatPaginator,
    MatButtonModule,
    MatFormField,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }