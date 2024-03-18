import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  isLoggedIn = true;



  constructor(private router: Router, private http: HttpClient, private CommonService: CommonService) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  generateFlightReport(): void {
    const url = this.CommonService.baseURL+'downloadSchedules';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/csv'
    });

    this.http.get(this.CommonService.baseURL+'downloadSchedules', {
      headers: headers,
      responseType: 'blob'
    }).subscribe((res: Blob) => {
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
    const url = this.CommonService.baseURL+'downloadBookingDetails';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/csv'
    });

    this.http.get(this.CommonService.baseURL+'downloadBookingDetails', {
      headers: headers,
      responseType: 'blob'
    }).subscribe((res: Blob) => {
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
}
