import React from "react";

const TrailerSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-gradient-to-t from-blue-300 to-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={require("../../assets/section2.png")} // Replace with your image URL
            alt="Rent a Trailer"
            className="w-full h-60 sm:h-72 md:h-80 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <img
                src={require("../../assets/rent.png")} // Replace with your image URL
                alt="Rent a Trailer"
                className="w-12 h-12 object-cover"
              />
            </div>
            <p className="text-gray-700 text-lg sm:text-xl text-center mb-6">
              Skip the rental counter, find the trailer that suits you, and start your adventure.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-base sm:text-lg w-11/12 sm:w-96 h-12 text-black px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white border-0">
                Rent a Trailer
              </button>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-gradient-to-t from-blue-300 to-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={require("../../assets/section.png")} // Replace with your image URL
            alt="Host a Trailer"
            className="w-full h-60 sm:h-72 md:h-80 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-center mb-4">
              <img
                src={require("../../assets/building.png")} // Replace with your image URL
                alt="Host a Trailer"
                className="w-16 h-12 object-cover"
              />
            </div>
            <p className="text-gray-700 text-lg sm:text-lg text-center mb-6">
              Earn extra income with your trailer or start your own business and earn with the system.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-base sm:text-lg w-11/12 sm:w-96 h-12 text-black px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white border-0">
                Become a Host
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerSection;
