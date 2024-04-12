package org.example.productcrudbe.repositories;

import org.example.productcrudbe.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
