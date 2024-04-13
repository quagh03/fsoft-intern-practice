package org.example.productcrudbe.services.category;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.example.productcrudbe.dtos.requests.CategoryDTO;
import org.example.productcrudbe.models.Category;
import org.example.productcrudbe.repositories.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService{
    private final CategoryRepository categoryRepository;
    private final ModelMapper mapper;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category with id " + id + " not found"));
    }

    @Override
    @Transactional
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Category createCategory(CategoryDTO category) {
        Category createCategory = new Category();

        mapper.map(category, createCategory);

        return categoryRepository.save(createCategory);
    }

    @Override
    @Transactional
    public Category updateCategory(Long id, CategoryDTO category) {
        Category updateCategory = getCategoryById(id);

        mapper.map(category, updateCategory);

        return categoryRepository.save(updateCategory);
    }
}
