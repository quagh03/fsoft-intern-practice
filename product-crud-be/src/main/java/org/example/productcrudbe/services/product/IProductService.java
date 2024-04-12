package org.example.productcrudbe.services.product;

import org.example.productcrudbe.dtos.requests.ProductDTO;
import org.example.productcrudbe.models.Product;

import java.util.List;

public interface IProductService {
    List<Product> getAllProducts();

    Product getProductById(Long id);

    void deleteProduct(Long id);

    Product updateProduct(Long id, ProductDTO product);

    Product createProduct(ProductDTO product);
}
