// travel-event-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelEntry } from '../models/travel-entry.model';
import { TravelEntryService } from '../services/travel-entry.service';

@Component({
  selector: 'app-travel-event-details',
  templateUrl: './travel-event-details.component.html',
  styleUrls: ['./travel-event-details.component.css']
})
export class TravelEventDetailsComponent implements OnInit {
  travelEntry!: TravelEntry;
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private travelEntryService: TravelEntryService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const entryId = params['id'];
      this.getTravelEntry(entryId);
    });
  }

  getTravelEntry(entryId: string): void {
    this.travelEntryService.getTravelEntry(entryId).subscribe((entry) => {
      this.travelEntry = entry;
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges(): void {
    this.travelEntryService.updateTravelEntry(this.travelEntry).subscribe(() => {
      this.isEditMode = false;
    });
  }

  deleteTravelEntry(): void {
    this.travelEntryService.deleteTravelEntry(this.travelEntry._id).subscribe(() => {
      this.router.navigate(['/travel-entries']);
    })
  }
}
