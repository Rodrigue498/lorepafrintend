import React from "react";
import { useNavigate } from "react-router-dom";

const ComparisonSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Title Section */}
      <h1 className="md:text-7xl text-lg  font-bold text-gray-800 text-center mb-4 w-1/4">
        Why List Your Trailer on Lorepa?
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Choose to rent out a trailer instead of a car.
      </p>

      {/* Comparison Section */}
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-16">
        {/* Lorepa Icon */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow">
            <img
              src={require("../../assets/logo.png")}
              alt="Lorepa Logo"
              className="w-25 h-20"
            />
          </div>
          <p className="text-lg font-semibold text-gray-700 mt-4">Lorepa</p>
        </div>

        {/* VS Text */}
       
        <div className="flex flex-col items-center ">
          <div className="ml-96">

          </div>
        </div>
        {/* Turo Icon */}
       
      </div>
      <div className="flex items-center">
          <span className="text-2xl font-bold  text-gray-600 mb-4">vs</span>
        </div>
      {/* Description Section */}
      <div className="max-w-2xl   flex flex-row">
        <div className="">
        <p className="text-gray-700 text-xl font-medium mb-4">
          In this article, you'll discover all the benefits and comparisons:
        </p>
        <ul className="text-gray-600 space-y-2 text-left">
          <li> Maintenance and usage</li>
          <li> Purchase price and parking</li>
          <li> Unique revenue opportunity</li>
          <li> Availability and flexibility</li>
        </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-white border border-gray-200 mt-4 rounded-lg flex items-center justify-center shadow">
            <img
              src={require("../../assets/Turo.png")}
              alt="Turo Logo"
              className="w-23 h-20"
            />
          </div>
          <p className="text-lg font-semibold text-gray-700 mt-4">Turo</p>
        </div>
      </div>
      <button className="bg-blue text-base sm:text-lg w-11/12 sm:w-96 h-12 text-black px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white border-0"  onClick={() => navigate('/learnmore')}>
                Learn More
              </button>
    </div>
  );
};

export default ComparisonSection;
