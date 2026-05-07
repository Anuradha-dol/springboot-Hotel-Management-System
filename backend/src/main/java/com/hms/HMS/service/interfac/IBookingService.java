package com.hms.HMS.service.interfac;

import com.hms.HMS.dto.Response;
import com.hms.HMS.entity.Booking;

public interface IBookingService {


    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);


    Response getAllBookings();
    Response cancelBooking(Long bookingId);

}
