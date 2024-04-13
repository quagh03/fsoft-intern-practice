import React from 'react';
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import { getAllCategories, deleteCategory, updateCategory, createCategory } from '../services/CategoryService';
import CategoryTable from '../components/CategoryTable/CategoryTable';

function CategoryPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        } catch (error) {
            alert(error.message)
            console.error('Error fetching categories:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteCategory(id);
            alert('Category deleted successfully');
            fetchCategories();
        } catch (error) {
            console.error('Error deleting Category:', error);
            alert('Error deleting Category');
        }
    };

    const handleUpdate = async (categoryData) => {
        try {
            await updateCategory(categoryData);
            alert('Category updated successfully');
            fetchCategories();
        } catch (error) {
            console.error('Error updating category:', error);
            alert('Error updating category');
        }
    }

    const handleCreate = async (categoryData) => {
        try {
            await createCategory(categoryData);
            alert('Category created successfully');
            fetchCategories();
        } catch (error) {
            console.error('Error creating category:', error);
            alert('Error creating category');
        }
    }
  return (
    <>
        <NavBar />
        <CategoryTable categories={categories} onDelete={handleDelete} onUpdate={handleUpdate} onCreate={handleCreate}/>
    </>
  );
};

export default CategoryPage;