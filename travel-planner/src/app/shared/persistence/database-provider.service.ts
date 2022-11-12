import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class NoSqlRealtimeDataProvider {
  
  public abstract getAllDocuments<T>(docPath: string): Observable<T[]>;
  public abstract getDocumentsByFieldValue<T>(docPath: string, fieldName: string, fieldValue: string): Observable<T[]>;

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

  public getDocumentsByFieldValue<T>(docPath: string, fieldName: string, fieldValue: string): Observable<T[]> {
    return this.firestore.collection<T>(
      docPath,
      ref => ref.where(fieldName, '==', fieldValue)
    )
    .valueChanges();
  }

  public addDocument(docPath: string, docData: Object): void {
    const collection: AngularFirestoreCollection = this.firestore.collection(docPath);
    collection.add(docData);
  }
}
