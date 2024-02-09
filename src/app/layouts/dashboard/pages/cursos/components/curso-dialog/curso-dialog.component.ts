import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../models';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrl: './curso-dialog.component.scss'
})
export class CursoDialogComponent {

  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCurso?: Curso
  ) {
    this.cursoForm = this.fb.group({
      name: this.fb.control(''),
      createdAt: this.fb.control(''),
    });
  }

  onSave(): void {
    this.dialogRef.close(this.cursoForm.value);
  }
}
