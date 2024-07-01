import React from 'react'
import { Link } from 'react-router-dom'

function TodaysDeal() {
  return (
    <div>
    <div className="flex justify-center items-center text-start md:mr-80 lg:mr-[42.5rem] ">
      <h2 className="font-bold text-2xl p-4 border-b-2">
        <span className="bg-black rounded-full">.</span> Today's deal
      </h2>
    </div>

    <div className="border-2">
      <div className="p-1 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
          {/* product one */}
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40 w-44"
              src="/src/assets/pc5.jpg"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2'>80% OFF</span> 
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2">Razo 4060 8GB RAM 1T..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-2 ">$199<sub className="text-red-700 text-xs">$799</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          {/* product One */}
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40"
              src="/src/assets/pc4.png"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2 '>50% OFF</span> 
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2"> COOLTECH 1650 8GB RAM..</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-2">$1229<sub className="text-red-700 text-xs">$2494</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40 w-44"
              src="/src/assets/phone2.jpg"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2'>50% OFF</span> 
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2">VIVO smartphone</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-2">$248<sub className="text-red-700 text-xs">$459</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
          <div className="p-1 lg:p-4  border-2 rounded-lg mb-5">
            <img
              className="h-40"
              src="/src/assets/headset2.jpg"
              alt="Product 1"
            />
            <div>
            <span className='bg-red-500 text-white p-0.5  text-sm font-bold ml-2'>70% OFF</span> 
            <h2 className="text-center font-semibold text-sm lg:text-md mt-1 mb-2">Headset</h2>
      {/* this h2 should be link to the shown img here!! IMPORTANT */}
              <div className="flex gap-1 justify-between items-center">
                <span className="text-green-600 font-bold text-sm lg:text-lg ml-2">$130<sub className="text-red-700 text-xs">$490</sub> </span>
                <span className="font-semibold border-2 p-1.5 rounded-full text-md bg-gray-200 lg:text-lg">🛒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TodaysDeal
