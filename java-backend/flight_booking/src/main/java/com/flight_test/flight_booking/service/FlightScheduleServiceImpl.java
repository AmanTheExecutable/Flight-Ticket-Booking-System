package com.flight_test.flight_booking.service;

import com.flight_test.flight_booking.dao.FlightScheduleDAO;
import com.flight_test.flight_booking.entity.FlightSchedule;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FlightScheduleServiceImpl implements FlightScheduleService{
    private FlightScheduleDAO flightScheduleDAO;
    @Autowired
    public FlightScheduleServiceImpl(FlightScheduleDAO flightScheduleDAO) {
        this.flightScheduleDAO = flightScheduleDAO;
    }

    @Override
    @Transactional
    public FlightSchedule addFlightSchedule(FlightSchedule flightSchedule) {
        return flightScheduleDAO.addFlightSchedule(flightSchedule);
    }

    @Override
    @Transactional
    public FlightSchedule deleteSchedule(int id) {
        return flightScheduleDAO.deleteSchedule(id);
    }
}
