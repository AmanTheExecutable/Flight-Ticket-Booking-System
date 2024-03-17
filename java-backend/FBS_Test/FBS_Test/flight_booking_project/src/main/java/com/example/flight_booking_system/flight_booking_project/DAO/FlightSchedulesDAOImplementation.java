package com.example.flight_booking_system.flight_booking_project.DAO;

import com.example.flight_booking_system.flight_booking_project.Entity.FlightSchedule;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FlightSchedulesDAOImplementation implements FlightSchedulesDAO {

    private EntityManager entityManager;
    @Autowired
    public FlightSchedulesDAOImplementation(EntityManager entityManager){
        this.entityManager=entityManager;
    }
    @Override
    @Transactional
    public void addSchedule(FlightSchedule flightSchedule) {
        entityManager.persist(flightSchedule);
    }

    @Override
    @Transactional
    public void updateSchedule(FlightSchedule flightSchedule) {
        entityManager.merge(flightSchedule);
    }

    @Override
    public List<FlightSchedule> findAllFlightSchedules() {
        return entityManager.createQuery("SELECT fs FROM FlightSchedule fs", FlightSchedule.class)
                .getResultList();
    }
}
