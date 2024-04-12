import React from 'react';

const ProductTableRow = ({ product, onEdit, onDelete }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {product.id}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {product.productName}
      </th>
      <td className="px-6 py-4">
        {product.productColor}
      </td>
      <td className="px-6 py-4">
        {product.category.cname}
      </td>
      <td className="px-6 py-4">
        ${product.price}
      </td>
      <td className="px-6 py-4">
        <button 
          type="button" 
          onClick={() => onEdit(product)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Update
        </button>
      </td>
      <td className="px-6 py-4">
        <button 
          type="button" 
          onClick={() => onDelete(product.id)} 
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductTableRow;
