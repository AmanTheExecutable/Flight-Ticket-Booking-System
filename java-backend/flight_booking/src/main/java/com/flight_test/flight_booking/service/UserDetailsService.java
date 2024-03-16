package com.flight_test.flight_booking.service;

import com.flight_test.flight_booking.entity.UserDetails;

public interface UserDetailsService {
    public UserDetails addUser(UserDetails userDetails);

    public UserDetails deleteUser(int id);
}
