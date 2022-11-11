import { Observable } from 'rxjs';
import { NewTravelDialogComponent } from './new-travel-dialog/new-travel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  // TODO: CHANGE any to Travel
  public travels: Observable<any[]> = new Observable();

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.travels = this.firestore.collection('travels').valueChanges();
  }

  public onTravelClick(): void {

  }

  public onAddTravelClick(): void {
    this.dialog.open(NewTravelDialogComponent).afterClosed()
      .subscribe(newTravelModel => {
        const travels: AngularFirestoreCollection = this.firestore.collection('travels');
        travels.add(newTravelModel);
      });
  }
}
