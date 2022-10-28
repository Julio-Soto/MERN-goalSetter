import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/" element={<Register/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
