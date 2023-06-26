import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = 'jwtToken';
  private baseUrl = 'http://localhost:3000/api/auth'; // Adjust the URL according to your backend API

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/signin`;
    const body = { email, password };
    return this.http.post(url, body);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token); // Save the token in localStorage
  }
  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
