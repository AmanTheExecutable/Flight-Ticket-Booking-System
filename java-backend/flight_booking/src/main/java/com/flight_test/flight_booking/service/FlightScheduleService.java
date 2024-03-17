package com.flight_test.flight_booking.service;

import com.flight_test.flight_booking.entity.FlightSchedule;

public interface FlightScheduleService {
    public FlightSchedule addFlightSchedule(FlightSchedule flightSchedule);

    public FlightSchedule deleteSchedule(int id);

}
