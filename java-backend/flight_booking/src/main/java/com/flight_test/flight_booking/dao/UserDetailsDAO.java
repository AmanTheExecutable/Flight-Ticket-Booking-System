package com.flight_test.flight_booking.dao;

import com.flight_test.flight_booking.entity.UserDetails;
import org.springframework.boot.autoconfigure.security.SecurityProperties;

public interface UserDetailsDAO {
    public UserDetails addUser(UserDetails userDetails);

    public UserDetails deleteUser(int id);
}
