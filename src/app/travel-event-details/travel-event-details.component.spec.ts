import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEventDetailsComponent } from './travel-event-details.component';

describe('TravelEventDetailsComponent', () => {
  let component: TravelEventDetailsComponent;
  let fixture: ComponentFixture<TravelEventDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelEventDetailsComponent]
    });
    fixture = TestBed.createComponent(TravelEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
