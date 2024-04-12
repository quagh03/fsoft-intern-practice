package org.example.productcrudbe.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "products")
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pname")
    private String productName;

    @Column(name = "pcolor")
    private String productColor;

    @Column(name = "price")
    private double price;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "pcategory", referencedColumnName = "id")
    private Category category;
}
