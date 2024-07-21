import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, updateCart, clearCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [localCart, setLocalCart] = useState(cart);
  const [emptyCartMessage, setEmptyCartMessage] = useState(false);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const applyDiscount = (product) => {
    if (product.discount) {
      const discountAmount = (product.price * product.discount) / 100;
      return product.price - discountAmount;
    }
    return product.price;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    localCart.forEach((product) => {
      const priceAfterDiscount = applyDiscount(product);
      totalPrice += priceAfterDiscount * product.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    if (localCart.length === 0 || localCart.every(product => product.quantity === 0)) {
      setEmptyCartMessage(true);
      setTimeout(() => {
        setEmptyCartMessage(false);
      }, 3000);
      return;
    }

    setShowPopup(true);

    setTimeout(() => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setLocalCart([]);
        clearCart(); // Call clearCart function to reset the cart size to zero in parent component
      }, 4000); // Simulating loading time before clearing cart
    }, 0);
  };

  const handleQuantityChangeLocal = (id, action) => {
    const updatedCart = localCart.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity:
              action === 'increase'
                ? product.quantity + 1
                : action === 'decrease'
                ? Math.max(product.quantity - 1, 0)
                : action === 'reset'
                ? 0
                : product.quantity,
          }
        : product
    );
    setLocalCart(updatedCart);
    updateCart(updatedCart);
  };

  return (
    <div className='mt-28 flex flex-col justify-center items-center'>
      <div className='w-[80%] overflow-x-scroll'>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {localCart.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-4 py-4 whitespace-nowrap">
                  <img className="h-[3rem]" src={product.img} alt={product.name} />
                </td>
                <td className="px-4 py-4 whitespace-normal">
                  <div className="text-sm text-gray-900">{product.name}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <button className='font-bold p-1 px-3 border-2' onClick={() => handleQuantityChangeLocal(product.id, 'decrease')}>
                      -
                    </button>
                    <p className='font-bold '>{product.quantity}</p>
                    <button className='font-bold p-1 px-3 border-2 ' onClick={() => handleQuantityChangeLocal(product.id, 'increase')}>
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {product.discount ? (
                    <p>
                      <span style={{ textDecoration: 'line-through' }}>
                        ${product.price}
                      </span>{' '}
                      ${applyDiscount(product)}
                    </p>
                  ) : (
                    <p className='text-sm'>No discount</p>
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  ${applyDiscount(product)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" bg-white p-4 shadow-lg rounded-lg fixed bottom-[6rem]">
        <div className="flex items-center gap-4">
          <p className="text-lg font-semibold">Total: ${calculateTotalPrice()}</p>
          <button onClick={handleCheckout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      </div>

      {emptyCartMessage && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded">
          There is nothing in your cart.
        </div>
      )}

      {showPopup && (
        <div className="fixed  p-6 shadow-xl border-4 rounded-lg z-10 bg-white translate-y-[50vw] ">
          {isLoading ? (
            <div className="text-center flex text-green-600 justify-center items-center
            flex-col gap-7  p-2">
              <p className="text-xl font-bold">Placing your order...</p>
              <div className="loader ease rounded-full border-4 border-t-4  h-10 w-10 border-blue-400 animate-spin"><span className='bg-red-500 h-2 '><img src="/Untitled.png" className='rounded-full border-4 border-yellow-400' alt="" /></span></div>
            </div>
          ) : (
            <div>
              <p className="text-lg font-bold text-center">🎊Your order has been placed🎊</p>
              <p className="text-center mt-2">Thank you for your purchase.</p>
              <div className="flex justify-center gap-6 mt-4">
                <button onClick={() => setShowPopup(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Close
                </button>
                <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to='/product'>more</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
