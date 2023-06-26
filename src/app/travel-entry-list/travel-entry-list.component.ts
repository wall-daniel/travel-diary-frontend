import { Component } from '@angular/core';
import { TravelEntryService } from '../services/travel-entry.service';
import { TravelEntry } from '../models/travel-entry.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-entry-list',
  templateUrl: './travel-entry-list.component.html',
  styleUrls: ['./travel-entry-list.component.css']
})
export class TravelEntryListComponent {
  travelEntries: TravelEntry[] = [];

  constructor(private travelEntryService: TravelEntryService,
    private router: Router) {}

  ngOnInit(): void {
    this.getTravelEntries();

    this.travelEntryService.updateEvent.subscribe(() => {
      console.log('Refreshing...')
      this.getTravelEntries();
    })
  }

  getTravelEntries(): void {
    this.travelEntryService.getTravelEntries().subscribe(
      (entries) => {
        this.travelEntries = entries;
      },
      (error) => {
        // Error handling
      }
    );
  }

  viewDetails(entryId: string): void {
    this.router.navigate(['/travel-entries', entryId]);
  }

  deleteEntry(entryId: string): void {
    this.travelEntryService.deleteTravelEntry(entryId).subscribe(
      () => {
        // Entry deleted successfully, refresh the entry list
        this.getTravelEntries();
      },
      (error) => {
        // Handle error
      }
    );
  }
}
