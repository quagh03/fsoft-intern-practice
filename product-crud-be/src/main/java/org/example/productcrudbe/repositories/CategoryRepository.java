package org.example.productcrudbe.repositories;

import org.example.productcrudbe.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
