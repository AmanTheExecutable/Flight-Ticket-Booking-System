import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isAuthenticated();
  }


  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
