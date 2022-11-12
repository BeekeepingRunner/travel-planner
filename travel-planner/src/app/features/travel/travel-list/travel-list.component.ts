import { AppUser } from './../../../access/auth/user';
import { Observable } from 'rxjs';
import { NewTravelDialogComponent } from './new-travel-dialog/new-travel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Travel } from '../entities/travel';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  @Input()
  public user!: AppUser;
  
  // TODO: CHANGE any to Travel
  public travels: Observable<any[]> = new Observable();

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    console.log(this.user);
    this.travels = this.firestore.collection(
      Travel.COLLECTION_NAME,
      ref => ref.where(Travel.USER_ID_FK, '==', this.user.uid)
    ).valueChanges();
  }

  public onTravelClick(): void {

  }

  public onAddTravelClick(): void {
    this.dialog.open(NewTravelDialogComponent).afterClosed()
      .subscribe(newTravelModel => {
        const travels: AngularFirestoreCollection = this.firestore.collection(Travel.COLLECTION_NAME);
        travels.add(newTravelModel);
      });
  }
}
