import React, { useState } from 'react';
import Header from '../component/header';
import Main from '../component/main';

const Contact = () => {
  const [title, setTitle] = useState("Contact");
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
              <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
              <p>Have questions or feedback? Use the form below to send us a message. We'll get back to you as soon as possible.</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-2xl
           hover:shadow-black transition duration-300 transform hover:scale-105">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Visit Our Office</h2>
              <p>Stop by our office during business hours. We're located at Brgy 26, Purok 2, Cahulogan, Gingoog City. We'd love to meet you in person!</p>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-2xl
           hover:shadow-black transition duration-300 transform hover:scale-105">
            <div className="p-10">
              <h2 className="text-xl font-semibold mb-2">Connect on Social Media</h2>
              <p>Follow us on social media for the latest updates, promotions, and more. Stay connected with our community!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
