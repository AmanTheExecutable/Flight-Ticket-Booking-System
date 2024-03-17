import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service' // Import your user service here
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]

    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }
    const formData = JSON.stringify(this.registrationForm.value);
    console.log(formData)
    this.userService.register(formData).subscribe(
      response => {
        console.log('Registration successful:', response);
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/login']);
  }

}
