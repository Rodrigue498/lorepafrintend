import React from "react";

const RevenueBanner = () => {
  return (
    <div className="bg-blue-600 text-white py-10 px-6">
      <div className="max-w-6xl  flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="ml-36">
          <p className="text-xl font-lg ">
            Every day your trailer is not in use is a missed income opportunity!
          </p>
          <h1 className="text-xl md:text-5xl font-bold leading-tight">
            Earn Extra Income Without Hassle
          </h1>
        </div>

        {/* Button Section */}
        <div className="mt-6 md:mt-0">
          <button className="bg-white text-black-600 ml-24 border-0 font-lg px-6 py-2 rounded shadow hover:bg-gray-200">
            Estimate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevenueBanner;
