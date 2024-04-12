import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} /> 
        <Route path="/products" element={<ProductPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
