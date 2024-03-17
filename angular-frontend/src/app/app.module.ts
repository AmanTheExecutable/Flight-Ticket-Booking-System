import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule, Form } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
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


const routes: Routes = [
  { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' },
  { path: 'user-dashboard', component: DashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'upcoming-trips', component: UpcomingTripsComponent },
  { path: 'manage-account', component: ManageAccountComponent },
  {path: 'flight-search-list' , component:FlightListComponent},
  { path: 'booking-cancellations', component: BookingCancellationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: RegistrationComponent },
  {path:'booking' , component:BookingComponent},
  {path:'flight-schedule-management', component:FlightScheduleManagementComponent},
  {path:'view-flight-schedules', component:ViewFlightSchedulesComponent},
  {path:'view-flight-bookings', component:ViewFlightBookingsComponent},
  {path:'update-flight-details', component:UpdateFlightSchedulesComponent},
  {path:'confirm-booking', component:ConfirmBookingComponent},
  {path:'confirm-booking', component:ConfirmBookingComponent},
  {path:'payment', component:PaymentComponent},
  {path:'payment-confirmation', component:PaymentConfirmationComponent},
  {path:'payment-failed', component:PaymentFailedComponent}
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
