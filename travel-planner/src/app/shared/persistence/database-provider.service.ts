import { AngularFirestore, AngularFirestoreCollection, Query } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ref } from 'firebase/database';

export abstract class NoSqlRealtimeDataProvider {
  
  public abstract getAllDocuments<T>(docPath: string): Observable<T[]>;
  public abstract getDocumentsByFieldValue<T>(docPath: string, queryParams: DocumentQueryParam[]): Observable<T[]>;

  public abstract addDocument(docPath: string, docData: Object): void;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataProvider extends NoSqlRealtimeDataProvider {

  constructor(
    private firestore: AngularFirestore
  ) {
    super();
  }

  public getAllDocuments<T>(docPath: string): Observable<T[]> {
    return this.firestore.collection<T>(docPath).valueChanges();
  }

  public getDocumentsByFieldValue<T>(docPath: string, queryParams: DocumentQueryParam[]): Observable<T[]> {

    return this.firestore.collection<T>(
      docPath,
      ref => {
        const firstParam: DocumentQueryParam = queryParams[0];
        let query: Query = ref.where(firstParam.fieldName, '==', firstParam.expectedFieldValue);

        queryParams.shift();
        queryParams.forEach(param => {
          query.where(param.fieldName, '==', param.expectedFieldValue)
        });
        return query;
      }
    )
    .valueChanges();
  }

  public addDocument(docPath: string, docData: Object): void {
    const collection: AngularFirestoreCollection = this.firestore.collection(docPath);
    collection.add(docData);
  }
}

export class DocumentQueryParam {
  public fieldName: string;
  public expectedFieldValue: string;

  public constructor(fieldName: string = '', expectedFieldValue: string = '') {
    this.fieldName = fieldName;
    this.expectedFieldValue = expectedFieldValue;
  }

  public static builder(): DocumentQueryParamBuilder {
    return new DocumentQueryParamBuilder();
  }
}

export class DocumentQueryParamBuilder {

  private queryParam: DocumentQueryParam = new DocumentQueryParam();

  public fieldName(fieldName: string): DocumentQueryParamBuilder {
    this.queryParam.fieldName = fieldName;
    return this;
  }

  public expectedFieldValue(expectedValue: string): DocumentQueryParamBuilder {
    this.queryParam.expectedFieldValue = expectedValue;
    return this;
  }

  public build(): DocumentQueryParam {
    return this.queryParam;
  }
}