package org.example.productcrudbe.services.category;

import org.example.productcrudbe.dtos.requests.CategoryDTO;
import org.example.productcrudbe.models.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAllCategories();

    Category getCategoryById(Long id);

    void deleteCategory(Long id);

    Category createCategory(CategoryDTO category);

    Category updateCategory(Long id, CategoryDTO category);
}
