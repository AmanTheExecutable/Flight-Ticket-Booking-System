package com.example.flight_booking_system.flight_booking_project.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="flight_schedules")
public class FlightSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="schedule_id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "flight_id")
    private FlightDetails flightDetails;

    @Column(name="source_location")
    private String sourceLocation;

    @Column(name="destination_location")
    private String destinationLocation;

    @Column(name="departure_time")
    private String departureTime;

    @Column(name="arrival_time")
    private String arrivalTime;

    @Column(name="economy_class_price")
    private String economyClassPrice;

    @Column(name="first_class_price")
    private String firstClassPrice;

    @Column(name="business_class_price")
    private String businessClassPrice;

    public FlightSchedule(){

    }

    public FlightSchedule(String sourceLocation, String destinationLocation, String departureTime, String arrivalTime, String economyClassPrice, String firstClassPrice, String businessClassPrice) {
        this.sourceLocation = sourceLocation;
        this.destinationLocation = destinationLocation;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.economyClassPrice = economyClassPrice;
        this.firstClassPrice = firstClassPrice;
        this.businessClassPrice = businessClassPrice;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public FlightDetails getFlightDetails() {
        return flightDetails;
    }

    public void setFlightDetails(FlightDetails flightDetails) {
        this.flightDetails = flightDetails;
    }

    public String getSourceLocation() {
        return sourceLocation;
    }

    public void setSourceLocation(String sourceLocation) {
        this.sourceLocation = sourceLocation;
    }

    public String getDestinationLocation() {
        return destinationLocation;
    }

    public void setDestinationLocation(String destinationLocation) {
        this.destinationLocation = destinationLocation;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getEconomyClassPrice() {
        return economyClassPrice;
    }

    public void setEconomyClassPrice(String economyClassPrice) {
        this.economyClassPrice = economyClassPrice;
    }

    public String getFirstClassPrice() {
        return firstClassPrice;
    }

    public void setFirstClassPrice(String firstClassPrice) {
        this.firstClassPrice = firstClassPrice;
    }

    public String getBusinessClassPrice() {
        return businessClassPrice;
    }

    public void setBusinessClassPrice(String businessClassPrice) {
        this.businessClassPrice = businessClassPrice;
    }

    @Override
    public String toString() {
        return "flightSchedules{" +
                "flightDetails=" + flightDetails +
                ", sourceLocation='" + sourceLocation + '\'' +
                ", destinationLocation='" + destinationLocation + '\'' +
                ", departureTime='" + departureTime + '\'' +
                ", arrivalTime='" + arrivalTime + '\'' +
                ", economyClassPrice='" + economyClassPrice + '\'' +
                ", firstClassPrice='" + firstClassPrice + '\'' +
                ", businessClassPrice='" + businessClassPrice + '\'' +
                '}';
    }
}
