import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
//import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import AuthorDetails from './components/AuthorDetails';
import AuthorUpdate from './components/AuthorUpdate'; 
function App() {
    const [updateDisplay,setUpdateDisplay] = useState(false);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AuthorList updateDisplay={updateDisplay}/>} />
                <Route path='/author/new' element={<AuthorForm/>} ></Route>
                <Route path="/author/:id" element={<AuthorDetails/>} />
                <Route element={<AuthorUpdate/>} path="/update/author/:id"/>
            </Routes>                         
        </div>
    );
}
export default App;