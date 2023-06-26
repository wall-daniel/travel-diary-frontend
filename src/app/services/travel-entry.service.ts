import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelEntry } from '../models/travel-entry.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TravelEntryService {
  private baseUrl = 'http://localhost:3000/api/travel-entries';
  private headers = new HttpHeaders();

  @Output() updateEvent = new EventEmitter();

  constructor(private http: HttpClient, private authService: AuthService) {
    // Set the headers with the JWT token
    const token = authService.getToken();
    this.headers = this.headers.set('Authorization', `Bearer ${token}`);
  }

  getTravelEntries(): Observable<TravelEntry[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<TravelEntry[]>(url, { headers: this.headers });
  }

  createTravelEntry(entryData: any): Observable<TravelEntry> {
    const url = `${this.baseUrl}`;
    return this.http.post<TravelEntry>(url, entryData, { headers: this.headers });
  }

  deleteTravelEntry(entryId: string): Observable<void> {
    const url = `${this.baseUrl}/${entryId}`;
    return this.http.delete<void>(url, { headers: this.headers });
  }

  // Get a single travel entry by ID
  getTravelEntry(entryId: string): Observable<TravelEntry> {
    const url = `${this.baseUrl}/${entryId}`;
    return this.http.get<TravelEntry>(url, { headers: this.headers });
  }

  // Update a travel entry by ID
  updateTravelEntry(updatedEntry: TravelEntry): Observable<TravelEntry> {
    const url = `${this.baseUrl}/${updatedEntry._id}`;
    return this.http.put<TravelEntry>(url, updatedEntry, { headers: this.headers });
  }
}
