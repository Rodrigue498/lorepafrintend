import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 bg-gradient-to-r from-blue-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Heading & Image */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              ________
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8">
              WHO ARE WE?
            </h1>
            <img
              src={require("../../assets/city1.jpg")}
              alt="Trailer Example"
              className="rounded-lg shadow-md w-full max-w-md h-auto mt-6"
            />
          </div>

          {/* Right Side - Images & Text */}
          <div className="lg:col-span-2 space-y-6 md:mt-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Two Side-by-Side Images */}
            <div className="flex flex-col md:flex-row gap-4 mt-6 w-full justify-center lg:justify-start">
              <img
                src={require("../../assets/cities.jpg")}
                alt="City View 1"
                className="rounded-lg shadow-md w-full md:w-1/2 md:h-96 h-auto"
              />
              <img
                src={require("../../assets/city2.jpeg")}
                alt="City View 2"
                className="rounded-lg shadow-md w-full md:w-1/2 md:h-96 h-auto"
              />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              The leading peer-to-peer trailer rental marketplace in Quebec. We connect
              trailer owners with individuals looking to rent trailers on a safe, secure, and
              user-friendly platform designed to simplify trailer rentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
