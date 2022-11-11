import { firebaseConfig } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig }
  ]
})
export class AccessModule { }
