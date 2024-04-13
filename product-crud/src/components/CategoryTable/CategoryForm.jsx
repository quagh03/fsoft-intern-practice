import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../../services/CategoryService';

const CategoryForm = ({  onCancel, isUpdate, initialData, onUpdate, onCreate }) => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryId, setCategoryId] = useState('');

    useEffect(() => {
        if(isUpdate && initialData) {
            setCategoryId(initialData.id || '');
            setCategoryName(initialData.cname || '');
        }
    }, [isUpdate, initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            id: categoryId,
            cname: categoryName,
        };

        if(isUpdate) {
            onUpdate(formData);
        } else {
            onCreate(formData);
        }

        if(!isUpdate) {
            setCategoryId('');
            setCategoryName('');
        }

        if (!isUpdate) {
            setCategoryId('');
            setCategoryName('');
          }
    };

    const handleCancel = () => {
        onCancel();
        setCategoryName('');
    };
    
    return (
      <>
        <div className="bg-gray-100 p-4">
        <form onSubmit={handleSubmit}>
            <h1 className="text-gray-900">{isUpdate ? 'Update' : 'Add Category'}</h1>
            <div className="mb-4">
            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                Category Name
            </label>
            <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
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
      </>  
    );
};

export default CategoryForm;
