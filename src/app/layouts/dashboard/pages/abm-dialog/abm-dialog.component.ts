import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../users/modelos';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-abm-dialog',
  templateUrl: './abm-dialog.component.html',
  styleUrl: './abm-dialog.component.scss'
})
export class AbmDialogComponent implements OnInit {
  userForm: FormGroup;
  
  cursadas: any[] = [
    { value: 'Virtual', viewValue: 'Virtual' },
    { value: 'Presencial', viewValue: 'Presencial' }
  ];

  constructor(
    public dialogRef: MatDialogRef<AbmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      nombre: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      apellido: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      mail: this.fb.control('', [Validators.required, Validators.email]),
      provincia: this.fb.control('', Validators.required),
      modoCursada: this.fb.control('', Validators.required),
    });

    if (data) {
      this.userForm.patchValue(data);
    }
  }

  ngOnInit(): void {
  }

  onSave(): void {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

