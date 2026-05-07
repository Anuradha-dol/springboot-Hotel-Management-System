package com.hms.HMS.service.interfac;

import com.hms.HMS.dto.Response;
import com.hms.HMS.entity.User;

public interface IUserService {

    Response register(User user);

    Response login(User user);

    Response getAllUsers();

    Response getUserById(Long userId);

    Response getUserBookingHistory(Long userId);

    Response getMyInfo(Long userId);

    Response deleteUser(Long userId);

    Response getUserByEmail(String email);
}
