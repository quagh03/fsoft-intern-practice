package org.example.productcrudbe.services.product;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.example.productcrudbe.dtos.requests.ProductDTO;
import org.example.productcrudbe.models.Category;
import org.example.productcrudbe.models.Product;
import org.example.productcrudbe.repositories.CategoryRepository;
import org.example.productcrudbe.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService{
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapper mapper;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Product with id " + id + " not found")
        );
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Product updateProduct(Long id, ProductDTO product) {
        Product productToUpdate = productRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Product with id " + id + " not found")
        );

        Category category = categoryRepository.findById(product.getCategory()).orElseThrow(
                () -> new EntityNotFoundException("Category with id " + product.getCategory() + " not found")
        );

        productToUpdate.setProductName(product.getProductName());
        productToUpdate.setPrice(product.getPrice());
        productToUpdate.setProductColor(product.getProductColor());
        productToUpdate.setCategory(category);

        return productRepository.save(productToUpdate);
    }

    @Override
    public Product createProduct(ProductDTO product) {
        Category category = categoryRepository.findById(product.getCategory()).orElseThrow(
                () -> new EntityNotFoundException("Category with id " + product.getCategory() + " not found")
        );

        Product createProduct = new Product();

        mapper.map(product, createProduct);

        createProduct.setCategory(category);

        return productRepository.save(createProduct);
    }

}
