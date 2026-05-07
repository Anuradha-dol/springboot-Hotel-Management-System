package com.hms.HMS.repo;

import com.hms.HMS.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Checks if a user exists with the given email
    boolean existsByEmail(String email);

    // Finds a user by email, returns Optional<User> to handle "not found" cases
    Optional<User> findByEmail(String email);

}
