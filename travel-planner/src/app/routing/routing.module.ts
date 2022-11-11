import { HomeComponent } from './../features/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../access/login/login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
