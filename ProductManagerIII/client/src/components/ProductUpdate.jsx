import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/` + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/update/product/` + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate(`/product/` + id);
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errorArr); 
            });
    }

    return (
        <div className="update-product-container">
            <button onClick={() => navigate('/')} className="back-to-home-button">
                Back to Home
            </button>
    <h1 className="update-product-title">Update Product</h1>
    {errors.map((err, index) => <p key={index}>{err}</p>)}

    <form onSubmit={updateProduct} className="update-product-form">
        <div className="form-group">
            <label className="form-label">Product Name</label><br />
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className="form-input" 
            />
        </div>
        <div className="form-group">
            <label className="form-label">Price</label><br />
            <input 
                type="number" 
                name="price"
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                className="form-input"
            />
        </div>
        <div className="form-group">
            <label className="form-label">Description</label><br />
            <textarea 
                name="description"
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                className="form-textarea"
            ></textarea>
        </div>
        <button type="submit" className="form-submit-button">Update Product</button>
    </form>
</div>
    );
}

export default UpdateProduct;