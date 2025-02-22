import React from "react";

const InsuranceFAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full justify-center bg-gray-100 p-6 rounded-lg shadow-lg w-full mx-auto">
      {/* Logo Section */}
      <div className="relative flex justify-center lg:mr-8">
        <img
          src={require("../../assets/inssurance.png")}
          className="w-[200px] md:w-[250px] lg:w-[300px] h-auto"
          alt="Insurance Logo"
        />
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <svg
            width="80"
            height="50"
            viewBox="0 0 100 60"
            className="absolute -top-2 -left-4"
          >
            <polygon
              points="10,30 50,5 90,30"
              fill="none"
              stroke="green"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-[500px] w-full px-4 lg:px-0">
        <p className="text-black font-bold text-lg md:text-xl lg:text-3xl">
          F.A.Q 27: For coverage in case of damage during rental
        </p>

        {/* Dots Section */}
        <div className="flex space-x-3 mt-4 justify-center lg:justify-start">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-gradient-to-b from-gray-400 to-blue-600 rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceFAQ;
