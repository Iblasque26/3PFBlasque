import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import SizeLetraDirective from './size-letra.directive';
import { ValidationErrorsPipe } from './validation-errors.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    NombreCompletoPipe,
    SizeLetraDirective,
    ValidationErrorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NombreCompletoPipe,
    SizeLetraDirective,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    ValidationErrorsPipe,
  ]
})
export class SharedModule { }
