package org.example.productcrudbe.services.authentication;

import org.example.productcrudbe.dtos.requests.UserDTO;

public interface IAuthenticationService {
    String signUp(UserDTO request);

    String signIn(UserDTO request);
}
