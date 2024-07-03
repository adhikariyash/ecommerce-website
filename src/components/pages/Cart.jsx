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

  return (
    <div className='mt-28 overflow-scroll'>
      {cart.length === 0 ? (
        <div> 
        <p className='font-bold'>Your cart is empty  add items to cart? </p>
        <Link exact path='/'>home</Link>
        </div>
      
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actual Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                  <div className="flex items-center">
                    <button className='font-bold p-2 border-2' onClick={() => handleQuantityChange(product.id, 'decrease')}>
                      -
                    </button>
                    <p className='font-bold px-4'>{product.quantity}</p>
                    <button className='font-bold p-2 border-2' onClick={() => handleQuantityChange(product.id, 'increase')}>
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
                    <p>Price: ${product.price}</p>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.totalPrice}
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
