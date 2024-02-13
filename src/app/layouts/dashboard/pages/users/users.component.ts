import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from './modelos/index';
import { MatDialog } from '@angular/material/dialog';
import { AbmDialogComponent } from '../abm-dialog/abm-dialog.component';
import { DialogConfirmarComponent } from '../dialog-confirmar/dialog-confirmar.component';
import { UsersService } from '../../../../core/services/users.service';
import { AlertsService } from '../../../../core/services/alerts.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  cursos = ['Angular', 'Js', 'Html', 'React'];
  displayedColumns: string[] = ['id', 'nombreCompleto', 'mail', 'provincia', 'curso', 'acciones'];
  dataSource: User[] = [];

  isEditing = false;
  constructor(
    private usersService: UsersService,
    private matDialog: MatDialog,
    private alertsService: AlertsService,
  ) { }

  openUsersDialog(): void {
    this.matDialog.open(AbmDialogComponent).afterClosed().subscribe((v: User) => {
      if (v) {
        const newUser: User = {
          ...v,
        };
        this.usersService.createUser(newUser).subscribe(() => {
          this.alertsService.showCreado();
          this.refreshUsers();
        });
      }
    });
  }

  refreshUsers(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.dataSource = users;
      }
    });
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.dataSource = users
      }
    })
  }

  onEditUser(user: User): void {
    this.isEditing = true;
    this.matDialog
      .open(AbmDialogComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe({
        next: (v: User) => {
          if (!!v) {
            this.dataSource = this.dataSource.map((u) =>
              u.id === user.id ? { ...u, ...v } : u
            );
            if (this.isEditing) {
              this.alertsService.showEditado();
            }
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
        if (user.id !== undefined) { 
          this.usersService.delUser(user.id).subscribe(() => {
            this.refreshUsers();
          });
        } else {
          console.error("El ID del usuario es undefined");
        }
      }
    });
  }

}