import { Injectable } from '@angular/core'
import { User } from '../dashboard/pages/users/modelos'
import { Router } from '@angular/router'
import { AlertsService } from '../../core/services/alerts.service';
import { delay, map, of } from 'rxjs';



interface LoginData {
    mail: null | string;
    password: null | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    authUser: User | null = null

    constructor(private router: Router, private alertsService: AlertsService) { }

    login(data: LoginData): void {
        const MOCK_USER = {
            id: 52,
            mail: 'test@mail.com',
            nombre: 'fakename',
            apellido: 'fakelastname',
            provincia: 'Messi',
            curso: [''],
            password: '123456'
          };

        if (
            data.mail === MOCK_USER.mail &&
            data.password === MOCK_USER.password
            ) {
            this.authUser = MOCK_USER;
            localStorage.setItem('token', '26122001')
            this.router.navigate(['dashboard', 'home']);
        } else {
            this.alertsService.showError('Email o contraseña incorrectos')
        }
    }

    logout(): void {
        this.authUser = null;
        this.router.navigate(['auth', 'login']);
        localStorage.removeItem('token');
    }

    verifyToken() {
        return of(localStorage.getItem('token')).pipe(delay(1000), map((response) => !!response))
    }
}
