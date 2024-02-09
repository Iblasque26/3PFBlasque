import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { MatFormField } from '@angular/material/form-field';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { UserDetailComponent } from './pages/users/pages/user-detail/user-detail.component';
import { CursosComponent } from './pages/cursos/cursos.component';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    SharedModule,
    MatFormField,
    MatButton,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserDetailComponent,
      },
      {
        path: 'cursos',
        loadChildren: () => import('./pages/cursos/cursos.module').then((m) => m.CursosModule)
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]),
    MatListModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
