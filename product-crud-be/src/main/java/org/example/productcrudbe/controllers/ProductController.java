package org.example.productcrudbe.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.productcrudbe.dtos.requests.ProductDTO;
import org.example.productcrudbe.models.Product;
import org.example.productcrudbe.services.product.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.prefix}/products")
@Tag(name = "Product Controller", description = "Endpoints for managing products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @Operation(summary = "Get all products", description = "Get all products in the database")
    @GetMapping()
    public ResponseEntity<?> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @Operation(summary = "Get product by ID", description = "Get a product by its ID")
    @GetMapping("/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @Operation(summary = "Delete product", description = "Delete a product by its ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully");
    }

    @Operation(summary = "Update product", description = "Update a product by its ID")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody ProductDTO product) {
        Product updated = productService.updateProduct(id, product);
        return ResponseEntity.ok(updated);
    }

    @Operation(summary = "Create product", description = "Create a new product")
    @PostMapping()
    public ResponseEntity<?> createProduct(@RequestBody ProductDTO product) {
        Product created = productService.createProduct(product);
        return ResponseEntity.ok(created);
    }

//    @Operation(summary = "Get product by category", description = "Get a product by its category")
//    @GetMapping("/category/{id}")
//    public ResponseEntity<?> getProductByCategory(@PathVariable Long id) {
//        List<Product> products = productService.getProductByCategory(id);
//        return ResponseEntity.ok(products);
//    }
}
