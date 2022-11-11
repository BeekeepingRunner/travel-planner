import { NewTravelDialogComponent } from './../travel/travel-list/new-travel-dialog/new-travel-dialog.component';
import { TravelListComponent } from './../travel/travel-list/travel-list.component';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    TravelListComponent,
    NewTravelDialogComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
