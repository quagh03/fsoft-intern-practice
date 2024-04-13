package org.example.productcrudbe.services.authentication;

import lombok.RequiredArgsConstructor;
import org.example.productcrudbe.dtos.requests.UserDTO;
import org.example.productcrudbe.enums.RoleEnum;
import org.example.productcrudbe.models.User;
import org.example.productcrudbe.repositories.UserRepository;
import org.example.productcrudbe.services.jwt.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService{
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public String signUp(UserDTO request) {
        if(existsByUsername(request.getUsername())) {
            throw new IllegalArgumentException("Username is already taken");
        }

        User user = User.builder()
                        .username(request.getUsername())
                        .role(RoleEnum.ROLE_GUEST)
                        .password(passwordEncoder.encode(request.getPassword()))
                        .build();
        userRepository.save(user);
        return jwtService.generateToken(user);
    }

    @Override
    public String signIn(UserDTO request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("Invalid username or password"));
        return jwtService.generateToken(user);
    }
}
