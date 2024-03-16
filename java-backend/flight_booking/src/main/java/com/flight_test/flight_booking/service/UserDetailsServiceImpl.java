package com.flight_test.flight_booking.service;

import com.flight_test.flight_booking.dao.UserDetailsDAO;
import com.flight_test.flight_booking.entity.UserDetails;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    private UserDetailsDAO userDetailsDAO;

    @Autowired
    public UserDetailsServiceImpl(UserDetailsDAO userDetailsDAO) {
        this.userDetailsDAO = userDetailsDAO;
    }

    @Override
    @Transactional
    public UserDetails addUser(UserDetails userDetails) {
        return userDetailsDAO.addUser(userDetails);
    }

    @Override
    @Transactional
    public UserDetails deleteUser(int id) {
        return userDetailsDAO.deleteUser(id);
    }
}
