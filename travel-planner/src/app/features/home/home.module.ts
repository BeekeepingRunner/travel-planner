import { NewTravelDialogComponent } from './../travel/travel-list/new-travel-dialog/new-travel-dialog.component';
import { TravelListComponent } from './../travel/travel-list/travel-list.component';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelPanelComponent } from '../travel/travel-list/travel-panel/travel-panel.component';



@NgModule({
  declarations: [
    HomeComponent,
    TravelListComponent,
    NewTravelDialogComponent,
    TravelPanelComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    TravelPanelComponent
  ]
})
export class HomeModule { }
