package org.example.productcrudbe.dtos.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
    private Long id;
    private String productName;
    private String productColor;
    private double price;
    private Long category;
}
