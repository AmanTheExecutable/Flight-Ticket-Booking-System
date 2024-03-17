import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDetails: any = {
    username: 'Aman Jangra',
    email: 'temp@gmail.com',
    phoneNo: '7814161155',
    address: 'Dummy Address',
    dob:'1999-12-12'
  };

  constructor() { }
  register(userData: any): Observable<any> {
    return of(userData);
  }

  login(userData: any): Observable<any> {
    return of(userData);
  }

  getUserDetails(): Observable<any> {
    return of(this.userDetails);
  }
  updateUserDetails(userData: any): Observable<any> {
    for (const key in userData) {
      if(userData[key]!='' && userData[key]!=null){
        this.userDetails[key] = userData[key];
      }
    }
    return of(this.userDetails);
  }
}
