import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import SizeLetraDirective from './size-letra.directive';



@NgModule({
  declarations: [
    NombreCompletoPipe,
    SizeLetraDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NombreCompletoPipe,
    SizeLetraDirective
  ]
})
export class SharedModule { }
