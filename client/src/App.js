import {Route, Routes} from 'react-router-dom'
import React from 'react';
import HomePage from './Pages/Website/HomePage';
import './App.css'
import Login from "./Pages/Auth/Login"
import Register from './Pages/Auth/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Products from './Pages/Dashboard/Products';
import Accounts from './Pages/Dashboard/Accounts/Accounts';
import RequireAuth from './Pages/Auth/RequireAuth'
import EditUser from './Pages/Dashboard/Accounts/EditUser';
import Categories from './Pages/Dashboard/Categories/Categories';

function App() {
  return (
    <Routes>
      // Global Routes
     <Route path="/" element={<HomePage />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />

     // Protected Routes
     <Route element={<RequireAuth/>} >
     <Route path="/dashboard" element={<Dashboard />} >
      <Route path="products" element={<Products/>}/>
      <Route path="accounts" element={<Accounts/>} />
      <Route path="accounts/:id" element={<EditUser />} />
      <Route path="categories" element={<Categories />} />
     </Route>
     </Route>
    </Routes>
  );
}

export default App;
