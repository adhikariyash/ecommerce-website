import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductData from '../Product-pages/Productdata';

function Slug({ handleClick }) {
  const { id } = useParams();
  const product = ProductData.all.find((item) => item.id === parseInt(id));
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const discountedPrice = product.discount > 0 
    ? (product.price - (product.price * product.discount) / 100).toFixed(2) 
    : product.price.toFixed(2);

  const handleAddToCart = (product) => {
    handleClick(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center mt-24 w-full">
      <div className="flex flex-col gap-16 sm:flex-row rounded-lg overflow-hidden p-10 justify-center items-center">
        <div className='border-4 '>
          <img src={product.img} alt={product.name} className="w-[100vw]" />
        </div>
        <div className="container">
          <h1 className="text-2xl font-bold mb-2">| {product.name}</h1>
          {product.discount > 0 && (
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-400 font-bold line-through">${product.price.toFixed(2)}</span>
              <span className="p-1 text-sm bg-red-500 text-white font-bold">{product.discount}% OFF</span>
            </div>
          )}
       
          <div className="flex justify-left gap-10 items-center">
            <span className="text-green-600 font-bold text-xl">${discountedPrice}</span>   
            <button onClick={() => handleAddToCart(product)} className="font-semibold border-x-black border-y-8 border-x-2 border-black rounded-md px-2 text-xl p-1 hover:bg-green-100">Add to cart</button>
          </div>
       
          <div className="mt-4">
            <h2 className="text-md font-semibold mb-2">Specifications:</h2>
            <ul className="list-disc pl-5">
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4"> 🎊Item added to cart 🎊!</h2>
            <Link to="/cart">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Cart</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slug;
