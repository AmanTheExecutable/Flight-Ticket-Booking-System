package com.flight_test.flight_booking.rest;

import com.flight_test.flight_booking.entity.BookingDetails;
import com.flight_test.flight_booking.entity.FlightSchedule;
import com.flight_test.flight_booking.service.BookingDetailsService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BookingDetailsController {

    private BookingDetailsService bookingDetailsService;

    public BookingDetailsController(BookingDetailsService bookingDetailsService) {
        this.bookingDetailsService = bookingDetailsService;
    }

    @PostMapping("/booking")
    public BookingDetails addBooking(@RequestBody BookingDetails bookingDetails) {
        bookingDetails.setBookingId(0);
        bookingDetails.setBookingDate(LocalDateTime.now());
        BookingDetails newBookingDetails = bookingDetailsService.addBooking(bookingDetails);
        return newBookingDetails;
    }

    @PutMapping("/booking")
    public BookingDetails updateBooking(@RequestBody BookingDetails bookingDetails) {
        BookingDetails newBookingDetails = bookingDetailsService.addBooking(bookingDetails);
        return newBookingDetails;
    }

    @DeleteMapping("/booking/{id}")
    public BookingDetails deleteBooking(@PathVariable int id) {
        return bookingDetailsService.deleteBooking(id);
    }


}
