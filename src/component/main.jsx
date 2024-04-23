import React from "react";

const Main = ({ hideCards, showCards }) => {
  return (
    <div className="flex justify-center mt-14">
      <button onClick={showCards} className="p-5 m-2 bg-white rounded-md hover:bg-gray-800 font-bold hover:text-white hover:shadow-2xl
       hover:shadow-black hover:font-bold transition duration-300 transform hover:scale-105">
        Show Cards
      </button>
      <button onClick={hideCards} className="p-5 m-2 bg-white rounded-md hover:bg-gray-800 font-bold hover:text-white hover:shadow-2xl
       hover:shadow-black hover:font-bold transition duration-300 transform hover:scale-105">
        Hide Cards
      </button>
    </div>
  );
};

export default Main;
