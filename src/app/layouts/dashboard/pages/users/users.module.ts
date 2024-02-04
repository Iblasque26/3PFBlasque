import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../../../../shared/shared.module';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    UsersComponent,
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
    MatPaginatorModule
  ],
  exports: [
    UsersComponent,
  ]
})
export class UsersModule { }
