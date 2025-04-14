import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './homepage/Home'
import Chef from './chef portal/Chef';
import Menu from './menu/Menu';


function App() {
  return (
    <Router>
      <nav>
        {/* <Link to="/register">Register</Link> | <Link to="/login">Login</Link> */}
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Home/>} />
        <Route path="/chefportal" element={< Chef />} />
        <Route path="/menu" element={< Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
