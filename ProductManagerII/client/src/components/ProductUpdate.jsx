import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProductName(res.data.productName);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/product/${id}`, {
            productName,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/products');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product Name</label><br />
                    <input 
                        type="text" 
                        name="productName" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                    />
                </p>
                <p>
                    <label>Price</label><br />
                    <input 
                        type="number" 
                        name="price"
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </p>
                <p>
                    <label>Description</label><br />
                    <textarea 
                        name="description"
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </p>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
}

export default UpdateProduct;