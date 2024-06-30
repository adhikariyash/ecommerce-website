import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../Nav'
import Home from './Home'
import About from'./About'
import Product from './Product'
import Contact from './Contact'
import TodayDeal from '../Product-pages/TodayDeal'
import Cart from './Cart'

function Router() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/product" element={<Product/>}/>
        <Route  path="/about" element={<About />}/>
        <Route path ="/today" element={<TodayDeal />}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        

    </Routes>


    </BrowserRouter>

  )
}

export default Router
