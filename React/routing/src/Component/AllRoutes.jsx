import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Help from './Help';
import Home from './Home';
import NotFound from './NotFound';
import ProductDetails from './ProductDetails';
import Products from './Products';
import UserDetails from './UserDetails';
import Users from './Users';

export default function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/userdetails' element={<UserDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}
