package org.example.productcrudbe.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.productcrudbe.dtos.requests.UserDTO;
import org.example.productcrudbe.services.authentication.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Authentication", description = "Authentication API")
@RequestMapping("${api.prefix}/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    @Operation(summary = "Sign up")
    public ResponseEntity<?> signUp(UserDTO request) {
        return ResponseEntity.ok(authenticationService.signUp(request));
    }

    @Operation(summary = "Sign in")
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(UserDTO request) {
        return ResponseEntity.ok(authenticationService.signIn(request));
    }
}
