import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {}

  signup(): void {
    const signupData = {
      email: this.email,
      password: this.password
    };

    this.authService.signup(signupData).subscribe(
      (result) => {
        const token = result.token; // Assuming the token property is 'token'
        this.authService.saveToken(token); // Save the token in the AuthService
        // Signup successful
        // Redirect the user to the desired page (e.g., travel entry list)
        this.router.navigate(['/travel-entries']);
      },
      (error) => {
        // Handle signup error
      }
    );
  }
}
