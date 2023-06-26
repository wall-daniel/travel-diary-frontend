import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTravelEntryComponent } from './create-travel-entry.component';

describe('CreateTravelEntryComponent', () => {
  let component: CreateTravelEntryComponent;
  let fixture: ComponentFixture<CreateTravelEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTravelEntryComponent]
    });
    fixture = TestBed.createComponent(CreateTravelEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
