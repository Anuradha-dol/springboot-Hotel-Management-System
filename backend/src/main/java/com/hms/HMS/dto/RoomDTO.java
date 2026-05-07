package com.hms.HMS.dto;


import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;


import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)

public class RoomDTO {



    private Long id;
    private String roomType;
    private String acType;
    private String roomPrice;
    private String roomPhotoUrl;
    private String roomDescription;
    private List<BookingDTO> bookings;


}
