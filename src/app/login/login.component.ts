import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Login successful
        const token = response.token;
        this.authService.saveToken(token);

        // navigate to travel entry list component
        this.router.navigate(['/travel-entries']);
      },
      (error) => {
        // Login failed, display error message
        this.error = error.message;
      }
    );
  }
}
