package com.hms.HMS.controller;

import com.hms.HMS.dto.Response;
import com.hms.HMS.entity.User;
import com.hms.HMS.service.interfac.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    // ADMIN: Get all users
    @GetMapping("/all")
    @PreAuthorize("hasAnyAuthority('ADMIN')")

    public ResponseEntity<Response> getAllUsers() {
        Response response = userService.getAllUsers();
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    // Get user by ID
    @GetMapping("/get-by-id/{userId}")
    public ResponseEntity<Response> getUserById(@PathVariable Long userId) {
        Response response = userService.getUserById(userId);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    // ADMIN: Delete user
    @DeleteMapping("/delete/{userId}")

    public ResponseEntity<Response> deleteUser(@PathVariable Long userId) {
        Response response = userService.deleteUser(userId);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    // Get logged-in user profile
    @GetMapping("/get-logged-in-profile-info")
    public ResponseEntity<Response> getLoggedInUserProfile(
            @AuthenticationPrincipal UserDetails userDetails) {
        Response response = userService.getUserByEmail(userDetails.getUsername());
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/my-bookings")
    public ResponseEntity<Response> getMyBookingHistory() {
        // Get the logged-in user
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) auth.getPrincipal(); // assuming your User implements UserDetails

        // Fetch bookings only for this user
        Response response = userService.getUserBookingHistory(user.getId());
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
