import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {updateDisplay} = props
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allproduct')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, [updateDisplay]);

    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={'/product/' + product._id}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;