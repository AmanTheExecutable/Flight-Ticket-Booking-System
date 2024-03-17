import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = true;

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  public login(): void {
    this.isLoggedIn = true;
  }

  public logout(): void {
    this.isLoggedIn = false;
  }
}
