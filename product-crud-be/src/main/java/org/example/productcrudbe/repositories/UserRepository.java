package org.example.productcrudbe.repositories;

import org.example.productcrudbe.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
