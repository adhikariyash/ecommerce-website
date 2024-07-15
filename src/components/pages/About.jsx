import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mt-32 mx-auto py-4 o">
      <h1 className="text-4xl font-bold mb-6 font-sans"> About MeTech's</h1>
      <p className="text-lg">
        Welcome to MeTech's, your premier destination for the latest and greatest in electronic devices. At MeTech's, we are passionate about providing our customers with top-quality products and exceptional customer service. Our mission is to make technology accessible and affordable for everyone.
      </p>
      <p className="text-lg mt-4">
        Our extensive product range includes:
      </p>
      <ul className="list-disc list-inside mt-3">
        <li>High-definition <span className='font-bold'>televisions</span> (TVs) from leading brands</li>
        <li>Powerful and portable <span className='font-bold'>laptops</span> for all your computing needs</li>
        <li>The latest <span className='font-bold'>mobile phones</span> with cutting-edge features</li>
        <li>Custom-built <span className='font-bold'> PCs </span> designed for performance and reliability</li>
        <li>Efficient <span className='font-bold'>CPU coolers</span> to keep your systems running smoothly</li>
        <li>Comfortable and high-quality <span className='font-bold'>headsets </span>for the best audio experience</li>
      </ul>
      <p className="text-lg mt-4 mb-4">
        At MeTech's, we are committed to providing our customers with the best shopping experience. Whether you are looking for the latest gadgets or need expert advice on the best products for your needs, our knowledgeable team is here to help. Thank you for choosing MeTech's – we look forward to serving you!
      </p>
      <div className="mt-16">
        <Link to="/product" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Shop Now
        </Link>
      </div>
      <p className="text-lg mt-4">
        <Link to="/" className="text-blue-500 hover:underline font-bold mb-3">
          Go back to Home
        </Link>
      </p>
      <p className="text-lg">
        Have questions or need assistance? Feel free to reach out to us via social media or email.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Social Media</h2>
        <ul className="list-none p-0 grid font-bold grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          <li className="mb-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default About;
