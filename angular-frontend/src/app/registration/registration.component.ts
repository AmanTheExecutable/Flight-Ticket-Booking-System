import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return;
    }
    const { name, email, phoneNo, password } = this.registrationForm.value;

    const formData = {
      name,
      email,
      phone_no: phoneNo,
      password
    };

    this.userService.register(formData).subscribe((response) => {
      if (response) {
        this.router.navigate(['/login']);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/login']);
  }

}
