import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPanelComponent } from './travel-panel.component';

describe('TravelPanelComponent', () => {
  let component: TravelPanelComponent;
  let fixture: ComponentFixture<TravelPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
