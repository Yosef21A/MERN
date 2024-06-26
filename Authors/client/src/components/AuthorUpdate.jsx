import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const UpdateAuthor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/` + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.error(err));
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/update/author/` + id, {
            name
        })
            .then(res => {
                console.log(res);
                navigate("/");
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
    <h1 className="update-product-title">Update Author</h1>
    {errors.map((err, index) => <p key={index}>{err}</p>)}

    <form onSubmit={updateAuthor} className="update-product-form">
        <div className="form-group">
            <label className="form-label">Author Name</label><br />
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="form-input" 
            />
            </div>
        <button type="submit" className="form-submit-button">Update Author</button>
    </form>
</div>
    );
}

export default UpdateAuthor;