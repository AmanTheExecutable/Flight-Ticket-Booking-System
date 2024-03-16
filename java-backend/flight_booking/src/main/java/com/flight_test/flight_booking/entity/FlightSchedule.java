package com.flight_test.flight_booking.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "flight_schedule")
public class FlightSchedule {
    @Id
    @Column(name = "schedule_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int scheduleId;

    @Column(name = "flight_id")
    private int flightId;

    @Column(name = "flight_model")
    private String flightModel;

    @Column(name = "source")
    private String source;

    @Column(name = "destination")
    private String destination;

    @Column(name = "departure_time")
    private LocalDateTime departureTime;

    @Column(name = "arrival_time")
    private LocalDateTime arrivalTime;

    @Column(name = "economy_class_price")
    private Double EC_Price;

    @Column(name = "business_class_price")
    private Double BC_Price;

    @Column(name = "first_class_price")
    private String FC_Price;

    @Column(name = "economy_class_seats")
    private int EC_Seats;

    @Column(name = "business_class_seats")
    private int BC_Seats;

    @Column(name = "first_class_seats")
    private int FC_Seats;

    @Column(name = "seats")
    private String seats;

    @OneToMany(mappedBy = "flightSchedule")
    private List<BookingDetails> bookings;

    public int getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(int scheduleId) {
        this.scheduleId = scheduleId;
    }

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public String getFlightModel() {
        return flightModel;
    }

    public void setFlightModel(String flightModel) {
        this.flightModel = flightModel;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public LocalDateTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalDateTime departureTime) {
        this.departureTime = departureTime;
    }

    public LocalDateTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalDateTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public Double getEC_Price() {
        return EC_Price;
    }

    public void setEC_Price(Double EC_Price) {
        this.EC_Price = EC_Price;
    }

    public Double getBC_Price() {
        return BC_Price;
    }

    public void setBC_Price(Double BC_Price) {
        this.BC_Price = BC_Price;
    }

    public String getFC_Price() {
        return FC_Price;
    }

    public void setFC_Price(String FC_Price) {
        this.FC_Price = FC_Price;
    }

    public int getEC_Seats() {
        return EC_Seats;
    }

    public void setEC_Seats(int EC_Seats) {
        this.EC_Seats = EC_Seats;
    }

    public int getBC_Seats() {
        return BC_Seats;
    }

    public void setBC_Seats(int BC_Seats) {
        this.BC_Seats = BC_Seats;
    }

    public int getFC_Seats() {
        return FC_Seats;
    }

    public void setFC_Seats(int FC_Seats) {
        this.FC_Seats = FC_Seats;
    }

    public String getSeats() {
        return seats;
    }

    public void setSeats(String seats) {
        this.seats = seats;
    }

    public List<BookingDetails> getBookings() {
        return bookings;
    }

    public void setBookings(List<BookingDetails> bookings) {
        this.bookings = bookings;
    }
}
