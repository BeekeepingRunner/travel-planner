import { NoSqlRealtimeDataProvider } from 'src/app/shared/persistence/database-provider.service';
import { NewTravelModel } from './../travel-list/new-travel-dialog/new-travel-dialog.component';
import { Injectable } from '@angular/core';
import { Travel } from '../entities/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelCommandService {

  constructor(
    private dataProvider: NoSqlRealtimeDataProvider,
  ) { }

  public addTravel(newTravelModel: NewTravelModel): void {
    this.dataProvider.addDocument(Travel.COLLECTION_NAME, newTravelModel);
  }
}
