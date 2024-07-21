import React, { useState } from 'react';
import Data from '../Product-pages/data'; // Adjust the path to your data.js file

const AdminPage = () => {
  const [products, setProducts] = useState(Data);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    discount: '',
    description: '',
    img: ''
  });

  const handleDelete = (category, index) => {
    const updatedCategory = [...products[category]];
    updatedCategory.splice(index, 1);
    setProducts({
      ...products,
      [category]: updatedCategory,
    });
  };

  const handleAdd = (category) => {
    setCurrentCategory(category);
    setIsAdding(true);
  };

  const handleEdit = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setFormData(products[category][index]);
    setIsEditing(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        img: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isAdding) {
      const updatedCategory = [...products[currentCategory], formData];
      setProducts({
        ...products,
        [currentCategory]: updatedCategory,
      });
      setIsAdding(false);
    } else if (isEditing) {
      const updatedCategory = [...products[currentCategory]];
      updatedCategory[currentIndex] = formData;
      setProducts({
        ...products,
        [currentCategory]: updatedCategory,
      });
      setIsEditing(false);
    }
    setFormData({
      title: '',
      price: '',
      discount: '',
      description: '',
      img: ''
    });
  };

  return (
    <div className="p-4 mt-24">
      <h1 className="text-3xl font-bold mb-6">Admin Page</h1>
      
      {/* Category Grid Navbar */}
      <div className="mb-8 flex justify-center">
        <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-4xl">
          {Object.keys(products).map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`py-2 px-4 rounded ${currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => setCurrentCategory('')}
            className={`py-2 px-4 rounded ${currentCategory === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
          >
            All
          </button>
        </nav>
      </div>

      {/* Product Listing */}
      <div>
        {(currentCategory ? [currentCategory] : Object.keys(products)).map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 capitalize">{category}</h2>
            <button
              onClick={() => handleAdd(category)}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
            >
              Add New {category}
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products[category].map((item, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm">
                  <img src={item.img} alt={item.name} className="w-full h-52 object-fit mb-4" />
                
                  <h2 className="font-bold text-center mb-1 text-2xl">{item.name}</h2>
                  <p className="text-gray-700 mb-1">Price: ${item.price}</p>
                  <p className="text-gray-700 mb-1">Discount: {item.discount}%</p>
                 
                  <button
                    onClick={() => handleDelete(category, index)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(category, index)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Form for adding/editing items */}
      {(isAdding || isEditing) && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{isAdding ? 'Add New Item' : 'Edit Item'}</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="mt-1 block w-full p-1 shadow-black rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-80"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleFormChange}
                  className="mt-1 block w-full shadow-black p-1 rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-80"
                  required
                />
              </div>
              <div>
                <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount</label>
                <input
                  id="discount"
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleFormChange}
                  className="mt-1 block w-full shadow-black rounded-md border-gray-500 shadow-sm p-1 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-80"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="mt-1 block w-full shadow-black rounded-md p-1 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-80"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  id="img"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-1 block w-full rounded-md border-gray-500 shadow-black p-1 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-80"
                  required
                />
              </div>
              {formData.img && (
                <img src={formData.img} alt="Preview" className="w-full h-40 object-cover mb-4" />
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsAdding(false);
                    setIsEditing(false);
                    setFormData({
                      title: '',
                      price: '',
                      discount: '',
                      description: '',
                      img: ''
                    });
                  }}
                  className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
