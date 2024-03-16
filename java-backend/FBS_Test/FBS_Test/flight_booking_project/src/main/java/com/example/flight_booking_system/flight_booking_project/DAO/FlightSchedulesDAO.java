package com.example.flight_booking_system.flight_booking_project.DAO;

import com.example.flight_booking_system.flight_booking_project.Entity.FlightSchedule;

import java.util.List;

public interface FlightSchedulesDAO {

    void updateSchedule(FlightSchedule schedule);

    void addSchedule(FlightSchedule schedule);
    List<FlightSchedule> findAllFlightSchedules();

}
