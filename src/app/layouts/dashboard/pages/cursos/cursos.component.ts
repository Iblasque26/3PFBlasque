import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  displayedColumns = ['id', 'cursoNombre', 'createdAt', 'acciones'];

  cursos: Curso[] = [];

  constructor(private cursosService: CursosService,
    public dialog: MatDialog) {
    this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    })
  }

  onCreate(): void {
    this.dialog.open(CursoDialogComponent)
  }

  onDelete(id: number) {
    this.cursosService.deleteCursoById(id).subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }
    })
  }
}
