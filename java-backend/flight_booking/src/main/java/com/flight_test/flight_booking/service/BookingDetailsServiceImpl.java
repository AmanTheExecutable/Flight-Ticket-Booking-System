package com.flight_test.flight_booking.service;

import com.flight_test.flight_booking.dao.BookingDetailsDAO;
import com.flight_test.flight_booking.entity.BookingDetails;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Service
public class BookingDetailsServiceImpl implements BookingDetailsService{

    private BookingDetailsDAO bookingDetailsDAO;

    @Autowired
    public BookingDetailsServiceImpl(BookingDetailsDAO bookingDetailsDAO) {
        this.bookingDetailsDAO = bookingDetailsDAO;
    }

    @Override
    @Transactional
    public BookingDetails addBooking(BookingDetails bookingDetails) {
        return bookingDetailsDAO.addBooking(bookingDetails);
    }

    @Override
    @Transactional
    public BookingDetails deleteBooking(int id) {
        return bookingDetailsDAO.deleteBooking(id);
    }
}
