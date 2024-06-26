import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate hook for redirection after deletion and update

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(() => {
                navigate('/'); // Redirect to home or another appropriate page after deletion
            })
            .catch(err => console.error(err));
    };

    const updateProduct = () => {
        navigate("/update/product/" + id); // Navigate to the update product page
    };

    return (
    <div className="product-details">
        <button onClick={() => navigate('/')} className="back-to-home-button">
                Back to Home
            </button>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={updateProduct}>Update</button> {/* Update button */}
        {' | '}
        <button onClick={deleteProduct} className="delete">Delete</button> {/* Delete button with class */}
    </div>
);
}

export default ProductDetails;