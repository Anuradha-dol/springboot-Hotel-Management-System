package com.hms.HMS.service.impl;


import com.hms.HMS.dto.BookingDTO;
import com.hms.HMS.dto.Response;
import com.hms.HMS.entity.Booking;
import com.hms.HMS.entity.Room;
import com.hms.HMS.entity.User;
import com.hms.HMS.exception.OurException;
import com.hms.HMS.repo.BookingRepository;
import com.hms.HMS.repo.RoomRepository;
import com.hms.HMS.repo.UserRepository;
import com.hms.HMS.service.interfac.IBookingService;
import com.hms.HMS.service.interfac.IRoomService;
import com.hms.HMS.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService implements IBookingService {



    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private IRoomService roomService;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private UserRepository userRepository;



    @Override
    public Response saveBooking(Long roomId, Long userId, Booking bookingRequest) {

        Response response = new Response();

        try{

            if(bookingRequest.getCheckOutDate().isBefore(bookingRequest.getCheckInDate())){

                throw new IllegalArgumentException("Check Out Date must be after Check out Date");
            }

            Room room = roomRepository.findById(roomId).orElseThrow(()->new OurException("Room Not Found"));

            User user = userRepository.findById(userId).orElseThrow(()->new OurException("User Not Found"));

            List<Booking> existingBooking = room.getBookings();




            if(!roomisAvailable(bookingRequest, existingBooking)){

                throw new OurException("Room Not Available for selected date range");
            }

            bookingRequest.setRoom(room);
            bookingRequest.setUser(user);
            String bookingConfirmationCode= Utils.generateRandomConfirmationCode(10);
            bookingRequest.setBookingConfirmationCode(bookingConfirmationCode);
            bookingRepository.save(bookingRequest);
            response.setMessage("Room Booking Confirmation");
            response.setStatusCode(200);
            response.setBookingConfirmationCode(bookingConfirmationCode);

        }catch(OurException oe) {

            response.setMessage("Room Not Available for selected date range");
            response.setStatusCode(404);



        }catch (Exception e){

            response.setMessage("Error saving Booking"+e.getMessage());
            response.setStatusCode(500);


        }
        return response;
    }


    private boolean roomisAvailable(Booking bookingRequest, List<Booking> existingBookings) {
        return existingBookings.stream()
                .noneMatch(existingBooking ->
                        bookingRequest.getCheckInDate().equals(existingBooking.getCheckInDate())
                                || bookingRequest.getCheckOutDate().isBefore(existingBooking.getCheckOutDate())
                                || (bookingRequest.getCheckInDate().isAfter(existingBooking.getCheckInDate())
                                && bookingRequest.getCheckInDate().isBefore(existingBooking.getCheckOutDate()))
                                || (bookingRequest.getCheckInDate().isBefore(existingBooking.getCheckInDate())

                                && bookingRequest.getCheckOutDate().equals(existingBooking.getCheckOutDate()))
                                || (bookingRequest.getCheckInDate().isBefore(existingBooking.getCheckInDate())

                                && bookingRequest.getCheckOutDate().isAfter(existingBooking.getCheckOutDate()))

                                || (bookingRequest.getCheckInDate().equals(existingBooking.getCheckOutDate()))
                                && bookingRequest.getCheckOutDate().equals(existingBooking.getCheckInDate())

                                || (bookingRequest.getCheckInDate().equals(existingBooking.getCheckOutDate()))
                                && bookingRequest.getCheckOutDate().equals(bookingRequest.getCheckInDate())
                );
    }


    @Override
    public Response findBookingByConfirmationCode(String confirmationCode) {
        Response response = new Response();

        try{
            Booking booking= bookingRepository.findByBookingConfirmationCode(confirmationCode).orElseThrow(()->new OurException("Booking Not Found"));
            BookingDTO bookingDTO= Utils.mapBookingEntityToBookingDTO(booking);
            response.setMessage("Room Booking Confirmation");
            response.setStatusCode(200);
            response.setBooking(bookingDTO);

        }catch(OurException oe) {

            response.setMessage("Room Not Available for selected date range");
            response.setStatusCode(404);



        }catch (Exception e){

            response.setMessage("Error Finding a Booking"+e.getMessage());
            response.setStatusCode(500);


        }
        return response;

    }

    @Override
    public Response getAllBookings() {
        Response response = new Response();

        try{
            List<Booking>bookingList= bookingRepository.findAll(Sort.by(Sort.Direction.DESC, "checkInDate"));
            List<BookingDTO> bookingDTOList= Utils.mapBookingListEntityToBookingListDTO(bookingList);
            response.setMessage("Room Booking Confirmation");
            response.setStatusCode(200);
            response.setBookingList(bookingDTOList);

        }catch(OurException oe) {

            response.setMessage("Room Not Available for selected date range");
            response.setStatusCode(404);



        }catch (Exception e){

            response.setMessage("Error Getting all Bookings "+e.getMessage());
            response.setStatusCode(500);


        }
        return response;

    }
    @Override
    public Response cancelBooking(Long bookingId) {

        Response response = new Response();

        try{
            bookingRepository.findById(bookingId).orElseThrow(()->new OurException("Booking Not Found"));
            bookingRepository.deleteById(bookingId);
            response.setMessage("Room Booking Cancel Confirmation");
            response.setStatusCode(200);


        }catch(OurException oe) {

            response.setMessage("Room Not Available for selected date range");
            response.setStatusCode(404);



        }catch (Exception e){

            response.setMessage("Error Cancelling Booking"+e.getMessage());
            response.setStatusCode(500);


        }
        return response;

    }
}
