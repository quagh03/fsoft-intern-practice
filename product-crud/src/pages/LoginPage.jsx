import LoginForm from '../components/LoginForm';
import { userLogin } from '../services/AuthenticationService';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = async (loginData) => {
        try {
            const token = await userLogin(loginData);
            localStorage.setItem('token', token);
            alert('Logged in successfully');
            navigate('/products');
        } catch (error) {
            console.error('Error: ', error);
            alert('Invalid username or password');
        }
    };

    return <LoginForm onLogin={handleLogin} />;
}

export default LoginPage;
