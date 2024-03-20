import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private router: Router,
    private userService: UserService
  ) {}
  private isLoggedIn = false;
  private isAdminLoggedIn = false;

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  public isAdminAuthenticated(): boolean {
    return this.isAdminLoggedIn;
  }

  public login(user_name: string, pass_word: string): string {
    const obj = {
      username: user_name,
      password: pass_word,
    };
    this.http
      .post(this.commonService.baseURL + 'login', obj)
      .subscribe((res: any) => {
        if (res.id == 0) {
          alert('Invalid username or password');
          return 'failure';
        } else {
          if (res.username.includes('kingflyer')) {
            this.isAdminLoggedIn = true;
            this.router.navigate(['/admin-dashboard']);
            return 'success';
          } else {
            const obj = {
              id: res.id,
              name: res.name,
              username: res.username,
              phoneNo: res.phoneNo,
              password: res.password,
            };
            this.userService.setUserData(obj);
            this.isLoggedIn = true;
            this.router.navigate(['/user-dashboard']);
            return 'success';
          }
        }
      });

    return '';
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  public adminLogout(): void {
    this.isAdminLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
