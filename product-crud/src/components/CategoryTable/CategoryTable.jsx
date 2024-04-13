import React from "react";
import { useState } from "react";
import CategoryForm from "../CategoryTable/CategoryForm";
import CategoryTableRow from "../CategoryTable/CategoryTableRow";
function CategoryTable({ categories, onDelete, onUpdate, onCreate }) {
    const [showForm, setShowForm] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleEdit = (category) => {
        setSelectedCategory(category);
        setIsUpdating(true);
        setShowForm(true);
    };

    const handleCancel = () => {
        setIsUpdating(false);
        setShowForm(false);
    };

    const toggleFormVisibility = () => {
        setShowForm(prevState => !prevState);
        setIsUpdating(false); 
    };

    const handleDelete = async (id) => {
        onDelete(id);
    }

    const handleUpdate = async (categoryData) => {
        onUpdate(categoryData);
    }

    const handleCreate = async (categoryData) => {
        onCreate(categoryData);
    }

    return (
        <div className="relative overflow-x-auto mx-36 mt-2.5">
            <h1 className="text-3xl font-bold mb-4">Product List</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Category ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category name
                        </th>
                        <th colSpan={2} scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <CategoryTableRow 
                            key={category.id} 
                            category={category} 
                            onEdit={() => handleEdit(category)} 
                            onDelete={() => handleDelete(category.id)} 
                        />
                    ))}
                    {showForm && (
                        <tr>
                            <td colSpan="4">
                                <CategoryForm
                                    onSubmit={() => {
                                        setShowForm(false);
                                        setIsUpdating(false);
                                    }}
                                    onCancel={handleCancel}
                                    isUpdate={isUpdating}
                                    onUpdate={handleUpdate}
                                    onCreate={handleCreate}
                                    initialData={selectedCategory}
                                />
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan="4" className="text-center py-3">
                            <button
                                onClick={toggleFormVisibility} 
                                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-400"
                            >
                                {showForm ? "-" : "+"}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;
