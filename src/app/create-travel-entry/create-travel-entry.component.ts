import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelEntryService } from '../services/travel-entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-travel-entry',
  templateUrl: './create-travel-entry.component.html',
  styleUrls: ['./create-travel-entry.component.css']
})
export class CreateTravelEntryComponent {
  travelEntryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
      private travelEntryService: TravelEntryService,
      private router: Router) {
    this.travelEntryForm = this.formBuilder.group({
      title: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  createTravelEntry(): void {
    if (this.travelEntryForm.valid) {
      const entryData = this.travelEntryForm.value;
      this.travelEntryService.createTravelEntry(entryData).subscribe(
        (newEntry) => {
          this.travelEntryService.updateEvent.emit(newEntry);
          
          // navigate to travel entry list component
          this.router.navigate(['/travel-entries']);
        },
        (error) => {
          // Handle error
        }
      );
    }
  }

  resetForm(): void {
    this.travelEntryForm.reset();
  }
}
