package com.flight_test.flight_booking.dao;

import com.flight_test.flight_booking.entity.UserDetails;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDetailsDAOImpl implements UserDetailsDAO{

    private EntityManager entityManager;

    @Autowired
    public UserDetailsDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public UserDetails addUser(UserDetails userDetails) {
        UserDetails newUserDetails = entityManager.merge(userDetails);
        return newUserDetails;
    }

    @Override
    public UserDetails deleteUser(int id) {
        UserDetails tmp = entityManager.find(UserDetails.class, id);
        entityManager.remove(tmp);
        return tmp;
    }


}
