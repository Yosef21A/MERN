import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes along with Route
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Routes> {/* Wrap Route in Routes */}
        <Route path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;