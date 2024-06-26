import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';
import { useNavigate, Link} from 'react-router-dom';
export default (props) => {
    const [errors, setErrors] = useState([]); 
    const {setUpdateDisplay} = props;
    const [name, setName] = useState(""); 
    const navigate = useNavigate();
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', { name })
            .then(() => navigate('/'))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errorArr); 
            })
    }
    return (
        <div className="form-container">
    <form onSubmit={onSubmitHandler}>
    <h1 className="form-title">Favorite Author</h1>
    {errors.map((err, index) => <p key={index}>{err}</p>)}
        <div>
            <label>Name</label><br/>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>
        <div>
    <button type="submit" className="submit-button">Create Author</button>
    <button type="button" onClick={() => navigate('/')} className="cancel-button">Cancel</button>
</div>
    </form>
</div>
    )
}