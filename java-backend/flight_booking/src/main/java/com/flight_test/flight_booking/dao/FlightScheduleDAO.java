package com.flight_test.flight_booking.dao;

import com.flight_test.flight_booking.entity.FlightSchedule;

public interface FlightScheduleDAO {
    public void getSchedulesByFlightId(int id);

    public FlightSchedule deleteSchedule(int scheduleId);

    public FlightSchedule addFlightSchedule(FlightSchedule flightSchedule);
}
