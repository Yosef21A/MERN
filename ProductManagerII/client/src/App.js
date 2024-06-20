import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
//import Main from './views/Main';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails'; // Assuming Detail is renamed to ProductDetails for clarity

function App() {
    const [updateDisplay,setUpdateDisplay] = useState(false);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<><ProductForm setUpdateDisplay={setUpdateDisplay}/><ProductList updateDisplay={updateDisplay}/></>} />
                <Route path="/product/:id" element={<ProductDetails/>} />
            </Routes>                         
        </div>
    );
}
export default App;