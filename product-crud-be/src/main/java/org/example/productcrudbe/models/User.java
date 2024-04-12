package org.example.productcrudbe.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.example.productcrudbe.enums.RoleEnum;


@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "upassword")
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "urole")
    private RoleEnum role;
}
