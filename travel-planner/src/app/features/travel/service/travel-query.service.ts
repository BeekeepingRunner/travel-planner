import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from '../entities/travel';
import { NoSqlRealtimeDataProvider } from 'src/app/shared/persistence/database-provider.service';

@Injectable({
  providedIn: 'root'
})
export class TravelQueryService {

  constructor(
    private dataProvider: NoSqlRealtimeDataProvider
  ) { }

  public getTravelsByUserUid(userUid: string): Observable<Travel[]> {
    return this.dataProvider.getDocumentsByFieldValue(Travel.COLLECTION_NAME, Travel.USER_ID_FK, userUid);
  }
}
