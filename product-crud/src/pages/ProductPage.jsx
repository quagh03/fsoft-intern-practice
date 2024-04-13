// HomePage.js
import React from 'react';
import ProductTable from '../components/ProductTable';
import { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct, updateProduct, createProduct } from '../services/ProductService';
import NavBar from '../components/NavBar';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
      try {
          const productsData = await getAllProducts();
          setProducts(productsData);
      } catch (error) {
        alert(error.message)
        console.error('Error fetching products:', error);
      }
  };

  const handleDelete = async (id) => {
    try {
        await deleteProduct(id);
        alert('Product deleted successfully');
        fetchProducts();
    } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
    }
  };

  const handleUpdate = async (productData) => {
    try {
        await updateProduct(productData);
        alert('Product updated successfully');
        fetchProducts();
    } catch (error) {
        console.error('Error updating product:', error);
        alert('Error updating product');
    }
  }

  const handleCreate = async (productData) => {
    try {
        await createProduct(productData);
        alert('Product created successfully');
        fetchProducts();
    } catch (error) {
        console.error('Error creating product:', error);
        alert('Error creating product');
    }
  }

  return (
    <>
      <NavBar />
      <ProductTable products={products} onDelete={handleDelete} onUpdate={handleUpdate} onCreate={handleCreate}/>
    </>
  );
}

export default ProductPage;