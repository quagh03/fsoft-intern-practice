package org.example.productcrudbe.services.category;

import org.example.productcrudbe.models.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAllCategories();

    Category getCategoryById(Long id);
}
