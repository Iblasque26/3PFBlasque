import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrl: './form-usuarios.component.scss'
})
export class FormUsuariosComponent {
 usuarioForm: FormGroup;

 @Output()
 userEnviar = new EventEmitter();


 constructor(private fb: FormBuilder) {
  this.usuarioForm = this.fb.group({
    nombre: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    apellido: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    mail: this.fb.control('', Validators.required),
    provincia: this.fb.control('', Validators.required),
    modoCursada: this.fb.control('', Validators.required),
  })
 }

 onSubmit(): void {
  if (this.usuarioForm.invalid) {
    this.usuarioForm.markAllAsTouched
  } else {
  this.userEnviar.emit(this.usuarioForm.value);
  this.usuarioForm.reset();
  }
 }
}
