package com.example.flight_booking_system.flight_booking_project.Entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="flight_details")
public class FlightDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="flight_id")
    private int id;


    @Column(name="flight_name")
    private String flightName;
    @Column(name="model")
    private String model;

    @Column(name="first_class_seats")
    private int firstClassSeats;

    @Column(name="business_class_seats")
    private int businessClassSeats;

    @Column(name="economy_class_seats")
    private int economyClassSeats;

    @OneToMany(mappedBy = "flightDetails", cascade = CascadeType.ALL)
    private List<FlightSchedule> schedules;

    public FlightDetails(){

    }

    public FlightDetails(String flightName, String model, int firstClassSeats, int businessClassSeats, int economyClassSeats) {
        this.flightName = flightName;
        this.model = model;
        this.firstClassSeats = firstClassSeats;
        this.businessClassSeats = businessClassSeats;
        this.economyClassSeats = economyClassSeats;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFlightName() {
        return flightName;
    }

    public void setFlightName(String flightName) {
        this.flightName = flightName;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getFirstClassSeats() {
        return firstClassSeats;
    }

    public void setFirstClassSeats(int firstClassSeats) {
        this.firstClassSeats = firstClassSeats;
    }

    public int getBusinessClassSeats() {
        return businessClassSeats;
    }

    public void setBusinessClassSeats(int businessClassSeats) {
        this.businessClassSeats = businessClassSeats;
    }

    public int getEconomyClassSeats() {
        return economyClassSeats;
    }

    public void setEconomyClassSeats(int economyClassSeats) {
        this.economyClassSeats = economyClassSeats;
    }


    @Override
    public String toString() {
        return "flightDetails{" +
                "id=" + id +
                ", flightName='" + flightName + '\'' +
                ", model='" + model + '\'' +
                ", firstClassSeats=" + firstClassSeats +
                ", businessClassSeats=" + businessClassSeats +
                ", economyClassSeats=" + economyClassSeats +
                '}';
    }
}
