import {Route, Routes} from 'react-router-dom'
import React from 'react';
import HomePage from './Pages/HomePage';
import './App.css'
import Login from "./Pages/Auth/Login"
import Register from './Pages/Auth/Register';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
