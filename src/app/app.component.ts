import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    let token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        token = this.authService.getToken();
        const currentRoute = this.router.url;
        if (!token && !(currentRoute == '/login' || currentRoute == '/signup')) {
          this.router.navigate(['/login']);
        } else if (token && currentRoute === '/login') {
          this.router.navigate(['/travel-entries']);
        }
      }
    });
  }

  signOut() {
    this.authService.clearToken(); // Assuming you have a clearToken() method in your AuthService
    this.router.navigate(['/login']); // Assuming your login route is '/login'
  }
}
