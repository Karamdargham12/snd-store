import {Route, Routes} from 'react-router-dom'
import React from 'react';
import HomePage from './Pages/HomePage';
import './App.css'
import Login from "./Pages/Auth/Login"
import Register from './Pages/Auth/Register';

function App() {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
