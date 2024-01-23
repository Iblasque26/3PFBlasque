import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import { FormUsuariosComponent } from './componentes/form-usuarios/form-usuarios.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent,
    FormUsuariosComponent,
  ],
  imports: [
    CommonModule, MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule { }
