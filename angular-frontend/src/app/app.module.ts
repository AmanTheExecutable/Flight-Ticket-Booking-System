import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpcomingTripsComponent } from './dashboard/upcoming-trips/upcoming-trips.component';
import { ManageAccountComponent } from './dashboard/manage-account/manage-account.component';
import { BookingCancellationsComponent } from './dashboard/booking-cancellations/booking-cancellations.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { BookingComponent } from './booking/booking.component';
import { FlightScheduleManagementComponent } from './admin-dashboard/flight-schedule-management/flight-schedule-management.component';
import { ViewFlightSchedulesComponent } from './admin-dashboard/view-flight-schedules/view-flight-schedules.component';
import { ViewFlightBookingsComponent } from './admin-dashboard/view-flight-bookings/view-flight-bookings.component';
import { UpdateFlightSchedulesComponent } from './admin-dashboard/update-flight-schedules/update-flight-schedules.component';
import { ConfirmBookingComponent } from './booking-confirmation/booking-confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { UserAuthGuard } from './services/user-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' },
  { path: 'user-dashboard', component: DashboardComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'upcoming-trips',
    component: UpcomingTripsComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'manage-account',
    component: ManageAccountComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'flight-search-list',
    component: FlightListComponent,
  },
  {
    path: 'booking-cancellations',
    component: BookingCancellationsComponent,
    canActivate: [UserAuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: RegistrationComponent },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'flight-schedule-management',
    component: FlightScheduleManagementComponent,

    canActivate: [AdminAuthGuard],
  },
  {
    path: 'view-flight-schedules',
    component: ViewFlightSchedulesComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'view-flight-bookings',
    component: ViewFlightBookingsComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'update-flight-details',
    component: UpdateFlightSchedulesComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'confirm-booking',
    component: ConfirmBookingComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'payment-confirmation',
    component: PaymentConfirmationComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'payment-failed',
    component: PaymentFailedComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    UpcomingTripsComponent,
    ManageAccountComponent,
    BookingCancellationsComponent,
    AdminDashboardComponent,
    FlightSearchComponent,
    FlightListComponent,
    BookingComponent,
    FlightScheduleManagementComponent,
    ViewFlightSchedulesComponent,
    ViewFlightBookingsComponent,
    UpdateFlightSchedulesComponent,
    ConfirmBookingComponent,
    PaymentComponent,
    PaymentConfirmationComponent,
    PaymentFailedComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
