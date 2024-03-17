package com.flight_test.flight_booking.dao;

import com.flight_test.flight_booking.entity.BookingDetails;

import java.time.LocalDateTime;

public interface BookingDetailsDAO {

    public BookingDetails addBooking(BookingDetails bookingDetails);

    public BookingDetails deleteBooking(int id);

}
