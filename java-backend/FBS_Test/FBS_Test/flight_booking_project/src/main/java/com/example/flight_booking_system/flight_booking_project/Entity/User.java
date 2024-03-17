package com.example.flight_booking_system.flight_booking_project.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="user_detail")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;


    @Column(name="authority")
    private String authority;
}
