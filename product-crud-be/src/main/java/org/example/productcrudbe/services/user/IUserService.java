package org.example.productcrudbe.services.user;

import org.example.productcrudbe.models.User;

import java.util.List;

public interface IUserService {
    List<User> getAllUsers();

    User getUserById(Long id);

    void deleteUser(Long id);
}
