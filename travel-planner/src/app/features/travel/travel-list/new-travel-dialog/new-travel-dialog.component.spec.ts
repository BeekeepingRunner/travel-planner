import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTravelDialogComponent } from './new-travel-dialog.component';

describe('NewTravelDialogComponent', () => {
  let component: NewTravelDialogComponent;
  let fixture: ComponentFixture<NewTravelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTravelDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTravelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
