import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleQuantityChange }) => {
  const applyDiscount = (product) => {
    if (product.discount) {
      const discountAmount = (product.price * product.discount) / 100;
      return product.price - discountAmount;
    }
    return product.price;
  };

  const calculateTotalPrice = (product) => {
    const priceAfterDiscount = applyDiscount(product);
    return priceAfterDiscount * product.quantity;
  };

  return (
    <div className='mt-28 overflow-scroll flex justify-center items-center '>
      {cart.length === 0 ? (
        <div className='h-screen flex justify-center items-center'>
          <div><img className='h-72' src='/empty.jpg' alt="Empty" /></div>
         <div> <p className='font-bold mb-2'>Your cart is empty.</p>
          <p className='font-semibold font-sans'>Would you like to <Link to='/product' className='text-blue-500 underline'>add items to cart</Link>?</p></div>
        </div>
      ) : (
        <table className="min-w-1/2 divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-16 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th scope="col" className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount
              </th>
              <th scope="col" className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actual Price
              </th>
              <th scope="col" className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cart.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img className="h-14 md:h-20 w-32" src={product.img} alt={product.name} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <button className='font-bold p-1 px-3 border-2' onClick={() => handleQuantityChange(product.id, 'decrease')}>
                      -
                    </button>
                    <p className='font-bold '>{product.quantity}</p>
                    <button className='font-bold p-1 px-3 border-2' onClick={() => handleQuantityChange(product.id, 'increase')}>
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.discount ? (
                    <p>
                      <span style={{ textDecoration: 'line-through' }}>
                        ${product.price}
                      </span>{' '}
                      ${applyDiscount(product)}
                    </p>
                  ) : (
                    <p>No discount</p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${calculateTotalPrice(product)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
