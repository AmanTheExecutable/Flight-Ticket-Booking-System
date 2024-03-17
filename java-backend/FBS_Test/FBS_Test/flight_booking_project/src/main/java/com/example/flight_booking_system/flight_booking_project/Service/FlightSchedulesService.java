package com.example.flight_booking_system.flight_booking_project.Service;

import com.example.flight_booking_system.flight_booking_project.Entity.FlightSchedule;

public interface FlightSchedulesService {
    FlightSchedule addSchedule(FlightSchedule schedule);

    FlightSchedule updateSchedule(FlightSchedule schedule);
}
