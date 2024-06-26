import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Delete from './Delete'; // Ensure you import the Delete component
import '../App.css';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

    useEffect(() => {
        axios.get('http://localhost:8000/api/allauthor')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== authorId));
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="author-list">
            <h2>Favorite authors</h2>
            <Link to="/author/new">Add new Author</Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author._id}>
                            <td><Link to={`/author/${author._id}`}>{author.name}</Link></td>
                            <td>
                                <button onClick={() => navigate(`/update/author/${author._id}`)}>Edit</button> {/* Button for Edit */}                                {' | '}
                                <Delete successCallback={() => deleteAuthor(author._id)} /> {/* Keep Delete as is */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorList;