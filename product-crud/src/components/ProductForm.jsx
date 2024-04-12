import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../services/CategoryService';

const ProductForm = ({  onCancel, isUpdate, initialData, onUpdate, onCreate }) => {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [color, setColor] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (isUpdate && initialData) {
      setProductId(initialData.id || '');
      setProductName(initialData.productName || '');
      setColor(initialData.productColor || ''); 
      setSelectedCategory(initialData.category || null);
      setPrice(initialData.price || ''); 
    }
  }, [isUpdate, initialData]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoriesData = await getAllCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: productId,
      productName,
      productColor: color,
      category: selectedCategory ? selectedCategory.id : '', 
      price,
    };

    if (isUpdate) {
      onUpdate(formData);
    } else {
      onCreate(formData);
    }

    if (!isUpdate) {
      setProductId('');
      setProductName('');
      setColor('');
      setSelectedCategory(null); 
      setPrice('');
    }

  };

  const handleCancel = () => {
    onCancel();
    setProductName('');
    setColor('');
    setSelectedCategory(null); 
    setPrice('');
  };

  return (
    <div className="bg-gray-100 p-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-gray-900">{isUpdate ? 'Update' : 'Add Product'}</h1>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Color
          </label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory ? selectedCategory.id : ''}
            onChange={(e) => {
              const selectedCategoryId = e.target.value;
              const category = categories.find(cat => cat.id === parseInt(selectedCategoryId));
              setSelectedCategory(category);
            }}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.cname}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            {isUpdate ? 'Update' : 'Add'}
          </button>
          <button type="button" onClick={handleCancel} className="text-red-500 hover:text-red-600 px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
