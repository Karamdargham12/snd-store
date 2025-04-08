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
import AddCategory from './Pages/Dashboard/Categories/AddCategory'
import EditCategory from './Pages/Dashboard/Categories/EditCategory';
import ShowCategories from './Pages/Dashboard/Categories/ShowCategories';
import Categories from './Pages/Website/Categories';
import Category from './Components/Website/Category';

function App() {
  return (
    <Routes>
      // Global Routes
     <Route path="/" element={<HomePage />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/categories" element={<Categories />} />
     <Route path="/categories/:id" element={<Category />} />

     // Protected Routes
     <Route element={<RequireAuth/>} >
     <Route path="/dashboard" element={<Dashboard />} >
      <Route path="products" element={<Products/>}/>
      <Route path="accounts" element={<Accounts/>} />
      <Route path="accounts/:id" element={<EditUser />} />
      <Route path="categories" element={<ShowCategories />} />
      <Route path="addCategory" element={<AddCategory />} />
      <Route path="categories/:id" element={<EditCategory />} />
     </Route>
     </Route>
    </Routes>
  );
}

export default App;
