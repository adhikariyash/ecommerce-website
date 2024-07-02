import React from "react";
import Data from "../Product-pages/data";
import tv2 from '/src/assets/tv2.jpg'
import laptop3 from '/src/assets/laptop3.jpg'
import phone1 from'/src/assets/phone1.jpg'
import cooler1 from '/src/assets/cooler1.jpg'
import headset2 from '/src/assets/headset2.jpg'
import pc3 from '/src/assets/pc3.jpg'


function TodaysDeal() {
  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem] ">
        <h2 className="font-bold text-2xl p-4 border-b-2">
          <span className="bg-black rounded-full">.</span> Today's deal
        </h2>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center w-fit items-center">
        {Data.todaysDeals.map((item) => (
          <div key={item.id} className="border border-gray-200  flex justify-center item center flex-col rounded-lg overflow-hidden shadow-md p-2">
            <img src={getImage(item.img)} alt={item.name} className="ml-9 w-44 h-44" />
            <div className="">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400 font-bold text-decoration-line: line-through">${item.price}</span>
                <span className=" p-1 text-sm bg-red-500 text-white font-bold">{item.discount}% OFF </span>
                
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">${calculateDiscountedPrice(item.price, item.discount)}</span>
              <span className="font-bold p-1 border-2">add to cart</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );
}
const getImage = (imageName) => {
  switch (imageName) {
    case 'tv2.jpg':
      return tv2;
    case 'laptop3.jpg':
      return laptop3;
    case 'phone1.jpg':
      return phone1;
    case 'cooler1.jpg':
      return cooler1;
    case 'headset2.jpg':
      return headset2;
    case 'pc3.jpg':
      return pc3;
    default:
      return null;
  }
};

export default TodaysDeal;
