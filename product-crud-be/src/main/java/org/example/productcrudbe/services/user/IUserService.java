package org.example.productcrudbe.services.user;

import org.example.productcrudbe.models.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface IUserService {
    UserDetailsService userDetailsService();

    List<User> getAllUsers();

    User getUserById(Long id);

    void deleteUser(Long id);
}
