import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Hero Image/Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://i.ibb.co.com/mFHsJbX/soccer-1490541-1920.jpg"
          alt="Sports Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Discover Premium Sports Equipment
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light drop-shadow-lg max-w-3xl">
          Find the best gear and accessories for all your favorite sports. From
          beginners to professionals, we have everything you need to perform at
          your best.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-8 py-3 text-lg font-semibold bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-100 transition duration-200">
            Shop Now
          </button>
          <button className="px-8 py-3 text-lg font-semibold bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
};

export default HeroSection;
