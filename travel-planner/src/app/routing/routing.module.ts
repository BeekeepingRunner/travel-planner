import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/login', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
