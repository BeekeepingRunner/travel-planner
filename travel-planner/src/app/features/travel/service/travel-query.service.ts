import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from '../entities/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelQueryService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public getTravelsByUserUid(userUid: string): Observable<Travel[]> {
    return this.firestore.collection<Travel>(
      Travel.COLLECTION_NAME,
      ref => ref.where(Travel.USER_ID_FK, '==', userUid)
    ).valueChanges();
  }
}
