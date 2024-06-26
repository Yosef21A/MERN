import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductList = (props) => {
    const { updateDisplay } = props;
    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); // Call useNavigate to get the navigate function

    useEffect(() => {
        axios.get('http://localhost:8000/api/allproduct')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, [updateDisplay]);
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                if(updateDisplay) {
                    updateDisplay(productId);
                } else {
                    setProducts(products.filter(product => product._id !== productId));
                }
            })
            .catch(err => console.error(err));
    };
    const updateProduct = (productId) => {
        navigate('/update/product/' + productId);
    };
    return (
    <div className="product-list">
        <h2>All Products</h2>
        <ul>
            {products.map(product => (
                <li key={product._id} className="product-item">
                    <div className="product-info">
                        <Link to={'/product/'+product._id} >
                        <span className="product-title">{product.title}</span>
                        </Link>
                    </div>
                    <span className="product-price">{`$${product.price}`}</span>
                    <div className="product-actions">
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                        <button onClick={() => updateProduct(product._id)}>Update</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
};

export default ProductList;