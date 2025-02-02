import React from "react";

const AboutUs = () => {
  return (
    <div className=" bg-gray-50 py-8 px-4 bg-gradient-to-r from-blue-100 to-gray">
      <div className=" mx-auto">

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image and Text Block */}
          <div className="md:col-span-1  ">
          <h1 className="text-3xl  font-bold text-gray-800   ml-36">
          ________
        </h1>
          <h1 className="text-7xl  font-bold text-gray-800  mb-8 ml-36">
          WHO ARE WE?
        </h1>
            <img
              src={require('../../assets/city1.png')}
              alt="Trailer Example"
              className="rounded-lg shadow-md w-full h-[350px] mt-12 ml-96"
            />
          </div>
          <div className="md:col-span-2 space-y-6 ml-96">
            {/* Text Content */}
            
            {/* Images */}
            <div className="flex gap-4 mt-12">
              <img
                src={require('../../assets/cities.png')}
                alt="City View 1"
                className="rounded-lg shadow-md w-1/3 h-[450px] ml-8 "
              />
              <img
                src={require('../../assets/city2.png')}
                alt="City View 2"
                className="rounded-lg shadow-md w-1/3 h-[450px] "
              />
            </div>
            <p className="text-xl text-gray-700 ml-8">
              The leading peer-to-peer trailer rental marketplace in Quebec. We
              connect <br/>trailer owners with individuals looking to rent trailers
              on a safe, secure,and <br/> user-friendly platform designed to simplify
              trailer rentals.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
