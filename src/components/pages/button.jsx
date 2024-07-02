import React from 'react';

function Button({ product }) {
  function handleClick() {
    console.log(product);
    console.log("btn is clicked");
  }

  return (
    <>   
      <button className='font-bold p-2 border-2  rounded-full hover:border-2 hover:border-blue-600 hover:bg-gray-200 transition-all delay-75 ease-in' onClick={handleClick}>
         🛒
      </button>
    </>
  );
}

export default Button;
