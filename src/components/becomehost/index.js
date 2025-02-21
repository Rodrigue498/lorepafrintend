import React from "react";

const CarSharingBanner = () => {
  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6">
        <h1 className="text-5xl font-semibold">
          Get your car working while you{" "}
          <span className="text-purple-600 font-bold">finally take a vacation.</span>
        </h1>
        <p className="mt-4 text-xl font-medium">
          Share your car when you're not using it and earn an average of{" "}
          <span className="text-blue-600 font-bold">$815 per month*</span> with
          Turo, the world's largest car-sharing platform.
        </p>

        {/* Insurance Providers */}
        <div className="flex items-center justify-center gap-8 mt-6">
        <button className="border border-0 w-24 mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg text-xl">
          To
        </button>
          <span className="font-bold text-xl uppercase">Insurance Providers</span>
          <img
            src={require('../../assets/download.png')}
            alt="Economical Insurance"
            className="h-24"
          />

        </div>

        {/* Button */}
        
      </div>

      {/* Bottom Section with Image */}
      <div className="relative">
        <img
           src={require('../../assets/host.jpg')}
          alt="Car Sharing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CarSharingBanner;
