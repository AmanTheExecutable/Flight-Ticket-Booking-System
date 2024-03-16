package com.flight_test.flight_booking.rest;

import com.flight_test.flight_booking.entity.UserDetails;
import com.flight_test.flight_booking.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserDetailsController {
    private UserDetailsService userDetailsService;

    @Autowired
    public UserDetailsController(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/user")
    public UserDetails addUser(@RequestBody UserDetails userDetails) {
        userDetails.setUserId(0);
        userDetails.setAuthority("USER");
        return userDetailsService.addUser(userDetails);
    }

    @PutMapping("/user")
    public UserDetails updateUser(@RequestBody UserDetails userDetails) {
        return userDetailsService.addUser(userDetails);
    }

    @DeleteMapping("/user/{id}")
    public UserDetails deleteUser(@PathVariable int id) {
        return userDetailsService.deleteUser(id);
    }
}
