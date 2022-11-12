import { NewTravelModel } from './../travel-list/new-travel-dialog/new-travel-dialog.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Travel } from '../entities/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelCommandService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public addTravel(newTravelModel: NewTravelModel): void {
    const travels: AngularFirestoreCollection = this.firestore.collection(Travel.COLLECTION_NAME);
    travels.add(newTravelModel);
  }
}
