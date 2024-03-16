package com.flight_test.flight_booking.dao;

import com.flight_test.flight_booking.entity.FlightSchedule;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Repository;

@Repository
public class FlightScheduleDAOImpl implements FlightScheduleDAO{

    private EntityManager entityManager;

    public FlightScheduleDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void getSchedulesByFlightId(int id) {

    }

    @Override
    public FlightSchedule deleteSchedule(int scheduleId) {
        FlightSchedule tmp = entityManager.find(FlightSchedule.class, scheduleId);
        entityManager.remove(tmp);
        return tmp;
    }

    @Override
    public FlightSchedule addFlightSchedule(FlightSchedule flightSchedule) {
        FlightSchedule newFlightSchedule = entityManager.merge(flightSchedule);
        return newFlightSchedule;
    }
}
