// ProductTable.js
import React, { useState } from 'react';
import ProductTableRow from './ProductTableRow';
import ProductForm from './ProductForm';
const ProductTable = ({ products, onDelete, onUpdate, onCreate  }) => {
    const [showForm, setShowForm] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleEdit = (product) => {
        setSelectedProduct(product);
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

    const handleUpdate = async (productData) => {
        onUpdate(productData);
    }

    const handleCreate = async (productData) => {
        onCreate(productData);
    }

    return (
        <div className="relative overflow-x-auto mx-36 mt-2.5">
            <h1 className="text-3xl font-bold mb-4">Product List</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th colSpan={2} scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <ProductTableRow 
                            key={product.id} 
                            product={product} 
                            onEdit={() => handleEdit(product)} 
                            onDelete={() => handleDelete(product.id)} 
                        />
                    ))}
                    {showForm && (
                        <tr>
                            <td colSpan="7">
                                <ProductForm
                                    onSubmit={() => {
                                        setShowForm(false);
                                        setIsUpdating(false);
                                    }}
                                    onCancel={handleCancel}
                                    isUpdate={isUpdating}
                                    onUpdate={handleUpdate}
                                    onCreate={handleCreate}
                                    initialData={selectedProduct}
                                />
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td colSpan="7" className="text-center py-3">
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

export default ProductTable;
