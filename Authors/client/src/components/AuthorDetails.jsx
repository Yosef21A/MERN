import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const AuthorDetails = (props) => {
    const [author, setAuthor] = useState({});
    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate hook for redirection after deletion and update

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deleteAuthor = () => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(() => {
                navigate('/'); // Redirect to home or another appropriate page after deletion
            })
            .catch(err => console.error(err));
    };

    const updateAuthor = () => {
        navigate("/update/author/" + id); // Navigate to the update author page
    };

    return (
    <div className="author-details">
        <button onClick={() => navigate('/')} className="back-to-home-button">
                Back to Home
            </button>
        <p>name: {author.name}</p>
        <button onClick={updateAuthor}>Update</button> {/* Update button */}
        {' | '}
        <button onClick={deleteAuthor} className="delete">Delete</button> {/* Delete button with class */}
    </div>
);
}

export default AuthorDetails;