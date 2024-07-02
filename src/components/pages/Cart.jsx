import React from 'react'
import Data from '../Product-pages/data'

function Cart() {
  return (
   
    <div>{Data.tv.map((item) => (
    <div>{item.name} 
    <img src={item.img} alt="" /></div>
    
    ))}</div>
  )
  
}

export default Cart
