import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { FlightService } from '../services/flight.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  isAdminLoggedIn: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private CommonService: CommonService,
    private flightService: FlightService,
    private authService: AuthService
  ) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.flightService.loadFlightSchedules();
    this.isAdminLoggedIn = this.authService.isAdminAuthenticated();
  }

  generateFlightReport(): void {
    const url = this.CommonService.baseURL + 'flightReport';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/csv',
    });

    this.http
      .get(this.CommonService.baseURL + 'flightReport', {
        headers: headers,
        responseType: 'blob',
      })
      .subscribe((res: Blob) => {
        const blobUrl = URL.createObjectURL(res);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Flight-Report.csv';
        document.body.appendChild(link);

        link.click();

        URL.revokeObjectURL(blobUrl);
        document.body.removeChild(link);
      });
  }

  generateBookingDetails(): void {
    const url = this.CommonService.baseURL + 'bookingReport';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/csv',
    });

    this.http
      .get(this.CommonService.baseURL + 'bookingReport', {
        headers: headers,
        responseType: 'blob',
      })
      .subscribe((res: Blob) => {
        const blobUrl = URL.createObjectURL(res);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Booking-Report.csv';
        document.body.appendChild(link);

        link.click();

        URL.revokeObjectURL(blobUrl);
        document.body.removeChild(link);
      });
  }

  logout(): void {
    this.authService.adminLogout();
  }
}
