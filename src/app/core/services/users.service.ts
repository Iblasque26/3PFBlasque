import { Injectable } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/modelos';
import { Observable, debounce, debounceTime, delay, of, mergeMap, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { enviroment } from '../../../enviroments/enviroments';
import { AlertsService } from './alerts.service';

let USERS_DB: User[] = [];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient, private alertsService: AlertsService) { }

  getUserById(id: number | string): Observable<User | undefined> {
    return this.httpClient.get<User>(`${enviroment.apiURL}/users/${id}`)
  }

  getUsers() {
    return this.httpClient.get<User[]>(`${enviroment.apiURL}/users`, {
    })
      .pipe(delay(1000))
      .pipe(catchError((error) => {
        this.alertsService.showError('Error al cargar los usuario')
        return of(error);
      }))
  }

  createUser(payload: User) {
    return this.httpClient.post<User>(`${enviroment.apiURL}/users`, payload).pipe(
      mergeMap(() => this.getUsers()));
  }

  delUser(userID: number) {
    return this.httpClient.delete<User>(`${enviroment.apiURL}/users/${userID}`)
  }

}
