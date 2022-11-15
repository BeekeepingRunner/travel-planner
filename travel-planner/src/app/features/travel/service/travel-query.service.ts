import { DocumentQueryParam } from './../../../shared/persistence/database-provider.service';
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
    return this.dataProvider.getDocumentsByFieldValue(
      Travel.COLLECTION_NAME,
      [ new DocumentQueryParam(Travel.USER_ID_FK, userUid) ]
    );
  }

  public getTravelByNameAndUserUid(travelName: string, userUid: string): Promise<Travel | undefined> {
    const queryParams: DocumentQueryParam[] = [];
    const travelParam = DocumentQueryParam.builder()
      .fieldName(Travel.COLLECTION_NAME)
      .expectedFieldValue(travelName)
      .build();

    queryParams.push(travelParam)
    const userUidParam = DocumentQueryParam.builder()
      .fieldName(Travel.USER_ID_FK)
      .expectedFieldValue(userUid)
      .build();
    queryParams.push()
    
    return this.dataProvider.getDocumentsByFieldValue<Travel>(Travel.COLLECTION_NAME, queryParams).toPromise()
    .then((travels: Travel[] | undefined) => {
      if (travels)
        return travels[0];
      else
        return travels;
    })
  }
}
