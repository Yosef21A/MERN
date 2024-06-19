import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
export default () => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(""); 
    const [description, setDescription] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <div className="form-container">
    <form onSubmit={onSubmitHandler}>
    <h1 className="form-title">Product Manager</h1>
        <div>
            <label>Title</label><br/>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </div>
        <div>
            <label>Price</label><br/>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
        </div>
        <div>
            <label>Description</label><br/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </div>
        <div>
            <button type="submit" className="submit-button">Create Product</button>
        </div>
    </form>
</div>
    )
}