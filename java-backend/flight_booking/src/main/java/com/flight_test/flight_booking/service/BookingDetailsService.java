package com.flight_test.flight_booking.service;

import com.flight_test.flight_booking.entity.BookingDetails;

public interface BookingDetailsService {
    public BookingDetails addBooking(
            BookingDetails bookingDetails
    );

    public BookingDetails deleteBooking(int id);

}
