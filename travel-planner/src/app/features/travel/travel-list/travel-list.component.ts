import { NewTravelDialogComponent } from './new-travel-dialog/new-travel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
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
