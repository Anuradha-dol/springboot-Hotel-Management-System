package com.hms.HMS.service.impl;

import com.hms.HMS.dto.BookingDTO;
import com.hms.HMS.dto.Response;
import com.hms.HMS.dto.UserDTO;
import com.hms.HMS.entity.User;
import com.hms.HMS.exception.OurException;
import com.hms.HMS.repo.UserRepository;
import com.hms.HMS.service.interfac.IUserService;
import com.hms.HMS.utils.JWTUtils;
import com.hms.HMS.utils.Utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public Response register(User user) {
        Response response = new Response();
        try {
            if (user.getRole() == null || user.getRole().isBlank()) {
                user.setRole("ROLE_USER");
            }

            if (userRepository.existsByEmail(user.getEmail())) {
                throw new OurException(user.getEmail() + " Email is already registered");
            }

            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User savedUser = userRepository.save(user);
            UserDTO userDto = Utils.mapUserEntityToUserDTO(savedUser);

            response.setStatusCode(201);
            response.setMessage("User registered successfully");
            response.setUser(userDto);
        } catch (OurException e) {
            response.setStatusCode(400);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Internal server error: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response login(User user) {
        Response response = new Response();
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );

            User existingUser = userRepository.findByEmail(user.getEmail())
                    .orElseThrow(() -> new OurException("User not found"));

            UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                    existingUser.getEmail(),
                    existingUser.getPassword(),
                    List.of(new SimpleGrantedAuthority(existingUser.getRole()))
            );

            String token = jwtUtils.generateToken(userDetails);

            response.setStatusCode(200);
            response.setMessage("Login successful");
            response.setToken(token);
            response.setRole(existingUser.getRole());
            response.setUser(Utils.mapUserEntityToUserDTO(existingUser));

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(401);
            response.setMessage("Invalid email or password");
        }
        return response;
    }

    @Override
    public Response getAllUsers() {
        Response response = new Response();
        try {
            List<UserDTO> users = userRepository.findAll()
                    .stream()
                    .map(Utils::mapUserEntityToUserDTO)
                    .collect(Collectors.toList());
            response.setStatusCode(200);
            response.setUserList(users);
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Failed to fetch users: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response getUserById(Long userId) {
        Response response = new Response();
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new OurException("User not found"));
            response.setStatusCode(200);
            response.setUser(Utils.mapUserEntityToUserDTO(user));
        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Failed to fetch user: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response getUserBookingHistory(Long userId) {
        Response response = new Response();
        try {
            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new OurException("User not found"));

            List<BookingDTO> bookingDTOs = user.getBookings()
                    .stream()
                    .map(Utils::mapBookingEntityToBookingDTO)
                    .collect(Collectors.toList());

            response.setBookingList(bookingDTOs);
            response.setStatusCode(200);

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Failed to fetch booking history: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response getMyInfo(Long userId) {
        return getUserById(userId);
    }

    @Override
    public Response deleteUser(Long userId) {
        Response response = new Response();
        try {
            if (!userRepository.existsById(userId)) {
                response.setStatusCode(404);
                response.setMessage("User not found");
                return response;
            }
            userRepository.deleteById(userId);
            response.setStatusCode(200);
            response.setMessage("User deleted successfully");
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Failed to delete user: " + e.getMessage());
        }
        return response;
    }

    @Override
    public Response getUserByEmail(String email) {

        Response response = new Response();

        try {
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new OurException("User not found"));

            response.setStatusCode(200);
            response.setUser(Utils.mapUserEntityToUserDTO(user));

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error fetching user: " + e.getMessage());
        }

        return response;
    }


}
