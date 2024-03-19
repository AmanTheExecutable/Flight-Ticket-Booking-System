import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss'],
})
export class ManageAccountComponent implements OnInit {
  userDetails: any;
  pastBookings: any[];
  upcomingBookings: any[];
  editing: any = {
    name: false,
    username: false,
    phoneNo: false,
    address: false,
    dob: false,
  };
  userForm: FormGroup;
  editMode = false;

  constructor(
    private bookingService: BookingService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [''],
      username: ['', [Validators.email]],
      phoneNo: [''],
      password: [''],
    });

    this.bookingService
      .getPastBookings(this.userService.userDetails.id)
      .subscribe(
        (bookings) => {
          this.pastBookings = bookings;
        },
        (error) => {
          console.error('Failed to fetch past bookings:', error);
        }
      );
    this.bookingService
      .getUpcomingBookings(this.userService.userDetails.id)
      .subscribe(
        (bookings) => {
          this.upcomingBookings = bookings;
        },
        (error) => {
          console.error('Failed to fetch confirmed bookings:', error);
        }
      );
    this.userService.getUserDetails().subscribe(
      (userDetails) => {
        this.userDetails = userDetails;
      },
      (error) => {
        console.error('Failed to fetch user details:', error);
      }
    );
  }

  updateUserDetails(): void {
    this.editMode = true;
    for (const field in this.editing) {
      this.editing[field] = true;
    }
  }

  enableForm(): void {
    this.editMode = true;
    this.userForm.enable();
  }

  saveChanges(): void {
    if (this.userForm.valid) {
      const confirmUpdate = window.confirm(
        'Are you sure you want to update the details?'
      );
      if (confirmUpdate) {
        this.userService.updateUserDetails(this.userForm.value).subscribe(
          (updatedDetails) => {
            this.userDetails = updatedDetails;
            this.userForm.disable();
            this.editMode = false;
          },
          (error) => {
            console.error('Failed to update user details:', error);
          }
        );
      }
    }
  }

  cancelChanges(): void {
    this.editMode = false;
    this.userForm.disable();
  }

  resetPassword(): void {}
}
