import { Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/modelos';
import { debounce, debounceTime, delay, of } from 'rxjs';

let USERS_DB: User[] = [
  {   
      id: 1,
      nombre: 'Ignacio',
      apellido: 'Blasque',
      mail: 'igna@gmail.com',
      provincia: 'Cordoba',
      curso: ['Angular'], 
}
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}

  getUsers() {
    return of(USERS_DB).pipe(delay(1000))
  }

  delUser(userID: number) {
    USERS_DB = USERS_DB .filter((User) => User.id !== userID);
    return this.getUsers();
  }

}
