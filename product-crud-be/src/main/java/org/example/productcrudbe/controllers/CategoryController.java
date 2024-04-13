package org.example.productcrudbe.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.productcrudbe.dtos.requests.CategoryDTO;
import org.example.productcrudbe.models.Category;
import org.example.productcrudbe.services.category.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/categories")
@RequiredArgsConstructor
@Tag(name = "Category Controller", description = "Endpoints for managing categories")
public class CategoryController {
    private final CategoryService categoryService;

    @Operation(summary = "Get all categories", description = "Get all categories in the database")
    @GetMapping()
    public ResponseEntity<?> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @Operation(summary = "Get category by ID", description = "Get a category by its ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Category deleted successfully");
    }

    @Operation(summary = "Create category", description = "Create a new category")
    @PostMapping()
    public ResponseEntity<?> createCategory(@RequestBody CategoryDTO category) {
        Category created = categoryService.createCategory(category);
        return ResponseEntity.ok(created);
    }

    @Operation(summary = "Update category", description = "Update a category")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id, @RequestBody CategoryDTO category) {
        Category updated = categoryService.updateCategory(id, category);
        return ResponseEntity.ok(updated);
    }
}
