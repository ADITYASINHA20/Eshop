import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-4xl font-bold mb-4">Welcome to Eshop!</h2>
      <p className="text-lg text-gray-600 mb-4">Your one-stop shop for everything.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Shop Now
      </button>
    </div>
  );
};

export default Home;

