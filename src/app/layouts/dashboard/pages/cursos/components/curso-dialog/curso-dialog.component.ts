import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrl: './curso-dialog.component.scss'
})
export class CursoDialogComponent {

  cursoForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CursoDialogComponent>) {
    this.cursoForm = this.fb.group({
      name: this.fb.control(''),
      createdAt: this.fb.control(''),
    });
  }

  onSave(): void {
this.dialogRef.close();
  }
}
