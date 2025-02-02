import React from "react";

const SignUpCar = () => {
  return (
    <div >
    <div className="flex items-center justify-between bg-gray-200 px-8 py-16">
      <div className="flex flex-col space-y-4">
        <h1 className="text-7xl font-bold text-gray-900 mb-4">
          List Your Car Today
        </h1>
        <p className="text-gray-700 text-xl">
          Join hundreds of thousands of Turo hosts and start earning money as early as tomorrow.
        </p>
      </div>
      <button className="ml-12 bg-indigo-600 border border-0 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-indigo-500">
        Get Started
      </button>
    </div>
    <div className="bg-gray-300 text-gray-800 text-center mx-auto text-sm">Applicable fees payable to Lorepa as indicated in Article 27 of the General Terms of Use*"**</div>
    </div>
  );
};

export default SignUpCar;
