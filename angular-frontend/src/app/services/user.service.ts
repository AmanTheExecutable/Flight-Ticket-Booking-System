import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from './common.service';
import { user } from '../modals/user.modal';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userDetails: user;

  constructor(private http: HttpClient, private commonService: CommonService) {}
  register(userData: any): Observable<any> {
    return this.http.post<any>(this.commonService.baseURL + 'user', userData);
  }

  login(userData: any): Observable<any> {
    return of(userData);
  }

  setUserData(userData: any): void {
    this.userDetails = userData;
  }

  getUserDetails(): Observable<any> {
    return of(this.userDetails);
  }
  updateUserDetails(userData: any): Observable<any> {
    for (const key in userData) {
      if (userData[key] != '' && userData[key] != null) {
        this.userDetails[key] = userData[key];
      }
    }
    return of(this.userDetails);
  }
}
