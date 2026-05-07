package com.hms.HMS.service.interfac;

import com.hms.HMS.dto.Response;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public interface IRoomService {

    Response addNewRoom(MultipartFile photo, String roomType, BigDecimal roomPrice, BigDecimal roomCapacity, String description, String acType);

    List<String> getAllRoomTypes();  // fixed typo

    Response getAllRooms();  // fixed typo

    Response deleteRoom(Long roomId);

    Response updateRoom(Long roomId, String description, String roomType, BigDecimal roomPrice, MultipartFile photo , String acType);

    Response getRoomById(Long roomId);

    Response getAvailableRoomsByDateAndType(LocalDate checkInDate, LocalDate checkOutDate, String roomType ,String acType);

    Response getAllAvailableRooms();
}
