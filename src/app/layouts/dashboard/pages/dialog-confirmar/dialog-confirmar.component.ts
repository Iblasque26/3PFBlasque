import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../users/modelos';

@Component({
  selector: 'app-dialog-confirmar',
  templateUrl: './dialog-confirmar.component.html',
  styleUrl: './dialog-confirmar.component.scss'
})
export class DialogConfirmarComponent {
  user: User;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.user = data;
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close('confirm');
  }
}
