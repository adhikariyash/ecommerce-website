import React from "react";
import Data from "../Product-pages/data";
import Button from './button'


function TodaysDeal() {
  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem] ">
        <h2 className="font-bold text-2xl p-4 border-b-2">
          <span className="bg-black rounded-full">.</span> Seasonal offer
        </h2>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-fit items-center">
        {Data.seasonalOffers.map((product) => (
          <div key={product.id} className="border border-gray-200  flex justify-center item center flex-col rounded-lg overflow-hidden shadow-md p-2">
            <img src={product.img} alt={product.name}className="h-48 w-64" />
            {console.log(product.img)}
            <div className="">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400 font-bold text-decoration-line: line-through">${product.price}</span>
                <span className=" p-1 text-sm bg-red-500 text-white font-bold">{product.discount}% OFF </span>
                
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${calculateDiscountedPrice(product.price, product.discount)}</span>
                <Button product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default TodaysDeal;
