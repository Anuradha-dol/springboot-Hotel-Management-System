package com.hms.HMS.utils;

import com.hms.HMS.dto.BookingDTO;
import com.hms.HMS.dto.RoomDTO;
import com.hms.HMS.dto.UserDTO;
import com.hms.HMS.entity.Booking;
import com.hms.HMS.entity.Room;
import com.hms.HMS.entity.User;

import java.security.SecureRandom;
import java.util.List;
import java.util.stream.Collectors;

public class Utils {

    /* ---------------- RANDOM STRING ---------------- */

    private static final String ALPHANUMERIC_STRING =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    private static final SecureRandom random = new SecureRandom();

    public static String generateRandomConfirmationCode(int length) {
        StringBuilder builder = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            builder.append(
                    ALPHANUMERIC_STRING.charAt(
                            random.nextInt(ALPHANUMERIC_STRING.length())
                    )
            );
        }
        return builder.toString();
    }

    /* ---------------- USER ---------------- */

    public static UserDTO mapUserEntityToUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setRole(user.getRole());
        return userDTO;
    }

    public static UserDTO mapUserEntityToUserDTOPlusUserBookingAndRoom(User user) {
        UserDTO userDTO = mapUserEntityToUserDTO(user);

        if (user.getBookings() != null && !user.getBookings().isEmpty()) {
            userDTO.setBookings(
                    user.getBookings()
                            .stream()
                            .map(booking ->
                                    mapBookingEntityToBookDTOPlusBookedRoom(booking, false)
                            )
                            .collect(Collectors.toList())
            );
        }
        return userDTO;
    }

    public static List<UserDTO> mapUserListEntityToUserListDTO(List<User> userList) {
        return userList
                .stream()
                .map(Utils::mapUserEntityToUserDTO)
                .collect(Collectors.toList());
    }

    /* ---------------- ROOM ---------------- */

    public static RoomDTO mapRoomEntityToRoomDTO(Room room) {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(room.getId());
        roomDTO.setRoomType(room.getRoomType());
        roomDTO.setRoomPrice(String.valueOf(room.getRoomPrice()));
        roomDTO.setRoomPhotoUrl(room.getRoomPhotoUrl());
        roomDTO.setRoomDescription(room.getRoomDescription());
        return roomDTO;
    }

    public static RoomDTO mapRoomEntityToRoomDTOPlusBookings(Room room) {
        RoomDTO roomDTO = mapRoomEntityToRoomDTO(room);

        if (room.getBookings() != null && !room.getBookings().isEmpty()) {
            roomDTO.setBookings(
                    room.getBookings()
                            .stream()
                            .map(Utils::mapBookingEntityToBookingDTO)
                            .collect(Collectors.toList())
            );
        }


        return roomDTO;
    }

    public static List<RoomDTO> mapRoomListEntityToRoomListDTO(List<Room> roomList) {
        return roomList
                .stream()
                .map(Utils::mapRoomEntityToRoomDTO)
                .collect(Collectors.toList());
    }

    /* ---------------- BOOKING ---------------- */

    public static BookingDTO mapBookingEntityToBookingDTO(Booking booking) {
        BookingDTO bookingDTO = new BookingDTO();
        bookingDTO.setId(booking.getId());
        bookingDTO.setCheckInDate(booking.getCheckInDate());
        bookingDTO.setCheckOutDate(booking.getCheckOutDate());
        bookingDTO.setNumOfAdults(booking.getNumOfAdults());
        bookingDTO.setNumOfChildren(booking.getNumOfChildren());
        bookingDTO.setTotalNumberOfGuests(booking.getTotalNumberOfGuests());
        bookingDTO.setBookingConfirmationCode(booking.getBookingConfirmationCode());
        return bookingDTO;
    }

    public static BookingDTO mapBookingEntityToBookDTOPlusBookedRoom(Booking booking, boolean mapUser) {

        BookingDTO bookingDTO = mapBookingEntityToBookingDTO(booking);

        if (booking.getRoom() != null) {
            bookingDTO.setRoom(
                    mapRoomEntityToRoomDTO(booking.getRoom())
            );
        }

        if (mapUser && booking.getUser() != null) {
            bookingDTO.setUser(
                    mapUserEntityToUserDTO(booking.getUser())
            );
        }

        return bookingDTO;
    }

    public static List<BookingDTO> mapBookingListEntityToBookingListDTO(List<Booking> bookingList) {
        return bookingList
                .stream()
                .map(Utils::mapBookingEntityToBookingDTO)
                .collect(Collectors.toList());
    }
}
