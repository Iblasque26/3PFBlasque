import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CursosService } from './cursos.service';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ],
  providers: [CursosService],
})
export class CursosModule { }
