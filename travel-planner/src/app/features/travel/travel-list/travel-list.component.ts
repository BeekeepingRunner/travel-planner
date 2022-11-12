import { TravelCommandService } from './../service/travel-command.service';
import { AppUser } from './../../../access/auth/user';
import { Observable } from 'rxjs';
import { NewTravelDialogComponent } from './new-travel-dialog/new-travel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Travel } from '../entities/travel';
import { TravelQueryService } from '../service/travel-query.service';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnInit {

  @Input()
  public user!: AppUser;
  
  public travels: Observable<Travel[]> = new Observable();

  constructor(
    public dialog: MatDialog,
    public travelQueryService: TravelQueryService,
    public travelCommandService: TravelCommandService,
  ) {}

  ngOnInit(): void {
    this.travels = this.travelQueryService.getTravelsByUserUid(this.user.uid);
  }

  public onTravelClick(): void {
    // TODO
  }

  public onAddTravelClick(): void {
    this.dialog.open(NewTravelDialogComponent).afterClosed()
      .subscribe(newTravelModel => {
        this.travelCommandService.addTravel(newTravelModel);
      });
  }
}
