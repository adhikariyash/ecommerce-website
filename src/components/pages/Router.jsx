import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Nav';
import Home from './Home';
import About from './About';
import Product from './Product';
import Cart from './Cart';
import Slug from './slug';
import AdminPage from './Admin';

function Router() {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const handleClick = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingProductIndex].quantity > 0) {
        updatedCart[existingProductIndex].quantity += 1;
        updatedCart[existingProductIndex].totalPrice += product.price;
      }
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1, totalPrice: product.price }]);
    }
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const handleQuantityChange = (productId, change) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === productId);

    if (index !== -1) {
      if (change === 'increase') {
        updatedCart[index].quantity += 1;
        updatedCart[index].totalPrice += updatedCart[index].price;
      } else if (change === 'decrease') {
        updatedCart[index].quantity -= 1;
        updatedCart[index].totalPrice -= updatedCart[index].price;
        if (updatedCart[index].quantity === 0) {
          updatedCart.splice(index, 1);
        }
      }
      setCart(updatedCart);
    }
  };

  return (
    <BrowserRouter>
      <Navbar size={cart.length} />
      <Routes>
        <Route exact path="/" element={<Home handleClick={handleClick} />} />
        <Route path="/product" element={<Product handleClick={handleClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Slug handleClick={handleClick} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} updateCart={updateCart} clearCart={clearCart} handleQuantityChange={handleQuantityChange} />}
        />
        <Route path = '/Admin' element ={<AdminPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
