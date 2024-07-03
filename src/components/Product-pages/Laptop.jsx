import React from 'react';
import Data from '../Product-pages/data';

function Laptop({handleClick}) {

 
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem] ">
        <h2 className="font-bold text-2xl p-4 border-b-2">
          <span className="bg-black rounded-full">.</span> Laptops      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-fit items-center">
        {Data.laptops.map((product) => (
          <div key={product.id} className="border border-gray-200 flex justify-center items-center flex-col rounded-lg overflow-hidden shadow-md w-72 p-2">
            <img src={product.img} alt={product.name} className="h-48 w-52" />
            <div className="container">
              <div className='flex justify-between'>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              </div>
            
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${product.price}</span>
                <button onClick={() => handleClick(product)} className="font-bold border-2 p-1 rounded-full text-2xl hover:border-green-400">🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptop;
