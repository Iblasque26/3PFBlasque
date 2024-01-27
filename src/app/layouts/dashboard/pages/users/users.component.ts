import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { User } from './modelos/index';
import { MatDialog } from '@angular/material/dialog';
import { AbmDialogComponent } from '../abm-dialog/abm-dialog.component';
import { DialogConfirmarComponent } from '../dialog-confirmar/dialog-confirmar.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'nombreCompleto', 'mail', 'provincia', 'modoCursada', 'acciones'];
  dataSource: User[] = [
    {
      id: 1,
      nombre: 'Ignacio',
      apellido: 'Blasque',
      mail: 'igna@gmail.com',
      provincia: 'Cordoba',
      modoCursada: 'Virtual',
      acciones: 'Eliminar'
    }
  ];

  constructor(private matDialog: MatDialog) { }
  ngOnInit(): void {
  }

  onUserEnviar(ev: User): void {
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }

  abrirEditDialog(user: User): void {
    this.matDialog
      .open(AbmDialogComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe({
        next: (v: User) => { // Define the type of v as User
          if (!!v) {
            this.dataSource = this.dataSource.map((u) =>
              u.id === user.id ? { ...u, ...v } : u
            );
          }
        },
      });
  }

  abrirElimDialog(user: User): void {
    const dialogRef = this.matDialog.open(DialogConfirmarComponent, {
      width: '350px',
      data: user
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.dataSource = this.dataSource.filter((u) => u.id !== user.id);
      }
    });
  }
}
