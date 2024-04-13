import axios from 'axios';
import { getToken } from './AuthenticationService';
const API_URL = 'http://localhost:8080/api/v1/categories';

const getAllCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`
                // Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxdWFuZ2h1eSIsImlhdCI6MTcxMzAwNTQzOSwiZXhwIjoxNzEzMDA4MDMxfQ.EKFZUkd6AWT7g77G3oOKYtD7IaVOAhxVy78Pr6bX1b0`
            }
        });
        return response.data;
    } catch (error) {
        throw error; 
    }
};

const deleteCategory = async (id) => {
    try{
        console.log(id);
        const response = await axios.delete(`${API_URL}/${id}`,
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );
        return response.data;
    }catch(error){
        throw error;
    }
};

const getCategoryById = async (id) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        });
        return response.data;
    }catch(error){
        throw error;
    }
};

const createCategory = async (category) => {
    try{
        const response = await axios.post(`${API_URL}`, category,{
            headers: {
                Authorization: `Bearer ${getToken()}`
                // Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxdWFuZ2h1eSIsImlhdCI6MTcxMzAwNTQzOSwiZXhwIjoxNzEzMDA4MDMxfQ.EKFZUkd6AWT7g77G3oOKYtD7IaVOAhxVy78Pr6bX1b0`
            }
        
        });
        return response.data;
    }catch(error){
        throw error;
    }
};

const updateCategory = async (category) => {
    try{
        const response = await axios.put(`${API_URL}/${category.id}`, category,{
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        
        });
        return response.data;
    }catch(error){
        throw error;
    }
}

export { getAllCategories,  deleteCategory, getCategoryById, createCategory, updateCategory};