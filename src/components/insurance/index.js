import React from "react";

const InsuranceFAQ = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg w-full mx-auto">
      {/* Logo Section */}
      <div className="relative mr-4">
        <img src={require('../../assets/inssurance.png')} className="w-[600px] h-[600px]" alt="Insurance Logo"/>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <svg
            width="100"
            height="60"
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

      {/* FAQ Section + Dots */}
      <div className="flex flex-col items-start max-w-[500px] w-1/2 ml-24">
        <p className="text-black font-bold text-5xl ">
          F.A.Q 27: For coverage in case of damage during rental
        </p>

        {/* Dots Section */}
        <div className="flex space-x-3 mt-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-6 h-6 bg-gradient-to-b from-gray-400 to-blue-600 rounded-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceFAQ;
