import { UserService } from './../../../../shared/service/user.service';
import { AuthService } from './../../../../access/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelQueryService } from '../../service/travel-query.service';
import { Travel } from '../../entities/travel';

@Component({
  selector: 'app-travel-panel',
  templateUrl: './travel-panel.component.html',
  styleUrls: ['./travel-panel.component.scss']
})
export class TravelPanelComponent implements OnInit {

  public travel: Travel | undefined = undefined;

  constructor(
    public route: ActivatedRoute,
    public travelQueryService: TravelQueryService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const travelName: string | null = params.get('name');
      if (travelName) {
        this.userService.getUserUid()
        .toPromise().then((userUid: string) => {
          console.log(userUid);
          return this.travelQueryService.getTravelByNameAndUserUid(travelName, userUid)
        }).then((travel: Travel | undefined) => {
          this.travel = travel;
        });
      }
    })
  }

}
