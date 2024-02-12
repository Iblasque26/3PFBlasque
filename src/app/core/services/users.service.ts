import { Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/modelos';
import { Observable, debounce, debounceTime, delay, of } from 'rxjs';

let USERS_DB: User[] = [
  {   
      id: 1,
      nombre: 'Ignacio',
      apellido: 'Blasque',
      mail: 'igna@gmail.com',
      provincia: 'Cordoba',
      curso: ['Angular'], 
      password: '',
},
{   
  id: 2,
  nombre: 'Luffy',
  apellido: 'Monkey',
  mail: 'nakama@gmail.com',
  provincia: 'Dawn',
  curso: ['Js'], 
  password: '',
}
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {}

  getUserById(id: number | string): Observable<User | undefined> {
    return of(USERS_DB.find((user) => user.id == id)).pipe(delay(1000));
  }

  getUsers() {
    return of(USERS_DB).pipe(delay(1000))
  }

  delUser(userID: number) {
    USERS_DB = USERS_DB .filter((User) => User.id !== userID);
    return this.getUsers();
  }

}
