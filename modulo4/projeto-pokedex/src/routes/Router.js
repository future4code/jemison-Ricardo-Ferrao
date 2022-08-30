import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen'
import CartScreen from '../screens/CartScreen/CartScreen'

export const Router = () => {
  const [cart, setCart] = useState([])

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage home={home} setCart={setCart} />} />
      <Route path="/cart" element={<CartScreen cart={cart} setCart={setCart} />} />
    </Routes>
  </BrowserRouter>
}

