import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/products';

const getAllProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
};

const createProduct = async (productData) => {
    try {
        const response = await axios.post(`${API_URL}`, productData);
        return response.data;
    } catch (error) {
        throw error;
    }

};

const updateProduct = async (productData) => {
    try {
        const response = await axios.put(`${API_URL}/${productData.id}`, productData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }

}

const deleteProduct = async (id) => {
    try{
        console.log(id);
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    }catch(error){
        throw error;
    }
};

export { getAllProducts,  deleteProduct, createProduct, updateProduct };