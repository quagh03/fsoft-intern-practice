import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/categories';

const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
};

const deleteCategory = async (id) => {
    try{
        console.log(id);
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    }catch(error){
        throw error;
    }
};

const getCategoryById = async (id) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    }catch(error){
        throw error;
    }
};

const createCategory = async (category) => {
    try{
        const response = await axios.post(`${API_URL}`, category);
        return response.data;
    }catch(error){
        throw error;
    }
};

const updateCategory = async (category) => {
    try{
        const response = await axios.put(`${API_URL}/${category.id}`, category);
        return response.data;
    }catch(error){
        throw error;
    }
}

export { getAllCategories,  deleteCategory, getCategoryById, createCategory, updateCategory};