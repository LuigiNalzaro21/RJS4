import React, { useState } from 'react';
import Header from '../component/header';
import Main from '../component/main';

const Home = () => {
  const [title, setTitle] = useState("Home Page");
  const [showCards, setShowCards] = useState(true);

  const hideCards = () => {
    setShowCards(false);
  };

  const showAllCards = () => {
    setShowCards(true);
  };

  return (
    <div className="bg-gray-700 min-h-screen">  
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-9xl font-bold text-center mb-4 text-white">{title}</h1>
        <Main hideCards={hideCards} showCards={showAllCards} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20" style={{ transition: 'opacity 0.5s ease', opacity: showCards ? 1 : 0 }}>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-2xl
           hover:shadow-black transition duration-300 transform hover:scale-105">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Welcome to Our Website!</h2>
              <p>We are delighted to have you here. Explore our site to discover exciting content, resources, and much more.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-2xl
           hover:shadow-black transition duration-300 transform hover:scale-105">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p>At our company, we are committed to providing top-notch services and products to our customers. Our mission is to exceed your expectations and deliver excellence in everything we do.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-2xl
           hover:shadow-black transition duration-300 transform hover:scale-105">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
              <p>Have questions or feedback? We'd love to hear from you! Contact us today to connect with our team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
