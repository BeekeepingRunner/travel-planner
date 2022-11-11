import { NewTravelDialogComponent } from './new-travel-dialog/new-travel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore
  ) { }

  ngOnInit(): void {
  }

  public onAddTravelClick(): void {
    this.dialog.open(NewTravelDialogComponent).afterClosed().subscribe(newTravelModel => {
      // add new travel
      console.log(newTravelModel);
    });
  }
}
