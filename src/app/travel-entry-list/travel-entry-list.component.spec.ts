import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEntryListComponent } from './travel-entry-list.component';

describe('TravelEntryListComponent', () => {
  let component: TravelEntryListComponent;
  let fixture: ComponentFixture<TravelEntryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelEntryListComponent]
    });
    fixture = TestBed.createComponent(TravelEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
