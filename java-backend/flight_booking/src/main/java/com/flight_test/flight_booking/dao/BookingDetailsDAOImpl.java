package com.flight_test.flight_booking.dao;

import com.flight_test.flight_booking.entity.BookingDetails;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
@Repository
public class BookingDetailsDAOImpl implements BookingDetailsDAO{

    private EntityManager entityManager;
    @Autowired
    public BookingDetailsDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public BookingDetails addBooking(BookingDetails bookingDetails) {
        BookingDetails newdetails = entityManager.merge(bookingDetails);
        return newdetails;
    }

    @Override
    public BookingDetails deleteBooking(int id) {
        BookingDetails tmp = entityManager.find(BookingDetails.class, id);
        entityManager.remove(tmp);
        return tmp;
    }


}
