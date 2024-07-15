import React from 'react';
import Data from '../Product-pages/data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Tv({handleClick}) {

  const [showPopup, setShowPopup] = useState(false); 
  const addToCart = (product) => {
    handleClick(product);
    setShowPopup(true); // Show popup when item is added to cart
    setTimeout(() => setShowPopup(false), 10000); }
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem] ">
        <h2 className="font-bold text-2xl p-4 border-b-2">
          <span className="bg-black rounded-full">.</span> Television        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-fit items-center">
        {Data.tv.map((product) => (
          <div key={product.id} className="border border-gray-200 flex justify-center items-center flex-col rounded-lg overflow-hidden shadow-md w-72 p-2">
            <img src={product.img} alt={product.name} className="h-48 w-52" />
            <div className="container">
              <div className='flex justify-between'>
              <h1 className="text-lg font-semibold mb-2">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h1>
              </div>
            
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${product.price}</span>
                <button onClick={() => addToCart(product)} className="font-bold border-2 p-1 rounded-full text-2xl hover:border-green-400">🛒</button>
              </div>
            </div>
          </div>
        ))}
         {/* Popup for cart confirmation */}
      {showPopup && (
        <div className="fixed bottom-10 right-10 bg-black p-4 rounded-lg shadow-md border border-gray-300">
          <p className="text-lg text-green-600">🎊Item added to cart🎊!</p>
          <div className="flex justify-end mt-4 space-x-4">
            <button onClick={() => setShowPopup(false)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Close</button>
            <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Cart</Link>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Tv;
