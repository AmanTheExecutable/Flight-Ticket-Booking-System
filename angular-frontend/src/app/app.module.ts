import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule, Form } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpcomingTripsComponent } from './upcoming-trips/upcoming-trips.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { BookingCancellationsComponent } from './booking-cancellations/booking-cancellations.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { BookingComponent } from './booking/booking.component';
import { FlightScheduleManagementComponent } from './flight-schedule-management/flight-schedule-management.component';


const routes: Routes = [
  { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' },
  { path: 'user-dashboard', component: DashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'upcoming-trips', component: UpcomingTripsComponent },
  { path: 'manage-account', component: ManageAccountComponent },
  { path: 'booking-cancellations', component: BookingCancellationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: RegistrationComponent },
  {path:'booking' , component:BookingComponent}
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
