import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
//import Main from './views/Main';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductUpdate from './components/ProductUpdate'; 
function App() {
    const [updateDisplay,setUpdateDisplay] = useState(false);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<><ProductForm setUpdateDisplay={setUpdateDisplay}/><ProductList updateDisplay={updateDisplay}/></>} />
                <Route path="/product/:id" element={<ProductDetails/>} />
                <Route element={<ProductUpdate/>} path="/update/product/:id"/>
            </Routes>                         
        </div>
    );
}
export default App;