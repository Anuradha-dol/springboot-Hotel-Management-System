package com.hms.HMS.repo;

import com.hms.HMS.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface RoomRepository  extends JpaRepository<Room,Long> {


    @Query("SELECT DISTINCT r.roomType FROM Room r ")
    List<String> findDistinctRoomTypes();

    @Query("""
    SELECT r
    FROM Room r
    LEFT JOIN Booking bk
     ON bk.room=r
     AND bk.checkInDate<:checkOutDate
      AND bk.checkOutDate > :checkInDate
      WHERE bk.id IS NULL
      AND(:roomType IS NULL OR r.roomType= :roomType)
     
   
         
    
""")
    List<Room> findAvailableRoomsByDatesAndTypes(
            LocalDate checkInDate,
            LocalDate checkOutDate,
            String roomType
    );



    @Query("""
    SELECT r
    FROM Room r
    WHERE r.id NOT IN (
        SELECT b.room.id
        FROM Booking b
    )
""")

    List<Room>getAllAvailableRooms();
}
