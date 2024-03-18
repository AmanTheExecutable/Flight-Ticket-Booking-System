import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private router: Router
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
          this.router.navigate(['/login']);
          return 'failure';
        } else {
          if (res.username.includes('kingflyer')) {
            this.isAdminLoggedIn = true;
            this.router.navigate(['/admin-dashboard']);
            return 'success';
          } else {
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
