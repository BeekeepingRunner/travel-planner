import { HomeComponent } from './../features/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../access/login/login.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { 
        path: 'login', component: LoginComponent,
        ...canActivate(redirectLoggedInToHome)
      },
      { 
        path: 'home', component: HomeComponent,
        ...canActivate(redirectUnauthorizedToLogin)
      },
      { path: '**', redirectTo: '/login', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
