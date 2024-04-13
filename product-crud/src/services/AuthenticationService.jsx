import axios from 'axios';

const API_URL = 'https://localhost:8080/api/v1/auth/';

const userLogin = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}signin`, loginData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const register = async (registerData) => {
    try {
        const response = await axios.post(`${API_URL}signup`, registerData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getToken = () => {
    return localStorage.getItem('token');
};

export { userLogin, register, getToken };
