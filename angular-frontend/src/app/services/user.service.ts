import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from './common.service';
import { user } from '../modals/user.modal';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userDetails: {
    id: number;
    name: string;
    username: string;
    phoneNo: string;
    password: string;
  };

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private router: Router
  ) {}
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
    const nonNullFields = Object.keys(userData).reduce((acc, key) => {
      if (userData[key] != '') {
        acc[key] = userData[key];
      }
      return acc;
    }, {});

    console.log(nonNullFields);

    const userDetailsUpdated = {
      ...this.userDetails,
      ...nonNullFields,
    };

    console.log(userDetailsUpdated);

    this.http
      .put(this.commonService.baseURL + 'user', userDetailsUpdated)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/user-dashboard']);
      });
    this.userDetails = userDetailsUpdated;
    return of(this.userDetails);
  }
}
