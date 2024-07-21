import React, { useState } from "react";
import Data from "../Product-pages/data";
import { Link } from "react-router-dom";

function Product({ handleClick }) {
  const [showPopup, setShowPopup] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  const handleAddToCart = (item) => {
    handleClick(item);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
  };

  const filteredProducts = currentCategory === 'all' 
    ? Data.all 
    : Data[currentCategory];

  return (
    <div className="mt-[10rem]">
      {/* Category Navigation */}
      <div className="mb-8 flex justify-center">
        <nav className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCurrentCategory('all')}
            className={`py-2 px-4 rounded ${currentCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
          >
            All
          </button>
          {Object.keys(Data).map((category) => (
            category !== 'all' && (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`py-2 px-4 rounded ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-sm flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-52 object-cover mb-4"
            />
            <Link className="font-bold text-2xl mb-2" to={`/product/${item.id}`}>{item.name}</Link>
            <div className="gap-20 mt-5 flex justify-center items-center">
              <span className="text-green-600 font-bold mb-2">${item.price}</span>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-gray-200 py-2 px-4 hover:border-blue-700 border-2 rounded-full text-black font-bold"
              >
                Add to cart 🛒
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="confetti mb-7">🎉 🎉</div>
            <p className="text-lg text-green-600 font-bold">🎊 Item added to cart 🎊</p>
            <div className="flex mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 mr-2"
              >
                Close
              </button>
              <Link to="/cart">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
