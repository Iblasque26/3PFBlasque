import { Component } from '@angular/core';
import { User } from './modelos';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
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
      acciones: 'eliminar',
    }
  ];


  onUserEnviar(ev: User): void {

    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }];
  }

  editarUsuario(user: any) {
      console.log('Editar Usuario');
  }

  eliminarUsuario(user: any) {
    console.log('Eliminar usuario:');
  }
}

