package com.flight_test.flight_booking.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user_detail")
public class UserDetails {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "authority")
    private String authority;

    @OneToMany(mappedBy = "userDetail")
    private List<BookingDetails> bookings;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public List<BookingDetails> getBookings() {
        return bookings;
    }

    public void setBookings(List<BookingDetails> bookings) {
        this.bookings = bookings;
    }
}
