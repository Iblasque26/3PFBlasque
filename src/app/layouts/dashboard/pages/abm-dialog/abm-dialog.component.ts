import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../users/modelos';



@Component({
  selector: 'app-abm-dialog',
  templateUrl: './abm-dialog.component.html',
  styleUrls: ['./abm-dialog.component.scss']
})
export class AbmDialogComponent {
  userForm: FormGroup;
  curso = ['Angular', 'Js', 'Html', 'React'];

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AbmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user?: User
  ) {
    this.userForm = this.fb.group({
      nombre: [this.user?.nombre || '', Validators.required],
      apellido: [this.user?.apellido || '', Validators.required],
      mail: [this.user?.mail || '', [Validators.required, Validators.email]],
      provincia: [this.user?.provincia || ''],
      curso: [this.user?.curso || []],
    });
  }

  get cursoControl(): FormControl | null {
    const control = this.userForm.get('curso');
    return control instanceof FormControl ? control : null;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      const formValue = this.userForm.value;
      const newUser: User = {
        nombre: formValue.nombre,
        apellido: formValue.apellido,
        mail: formValue.mail,
        provincia: formValue.provincia,
        curso: formValue.curso, 
        password: ''
      };
      this.matDialogRef.close(newUser);
    }
  }
}