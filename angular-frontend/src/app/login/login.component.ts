import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['User', Validators.required]
    });
  }

  onSubmit(): void {
    const { role } = this.loginForm.value;
    if (role === 'Admin') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/user-dashboard']);
    }
  }
}
