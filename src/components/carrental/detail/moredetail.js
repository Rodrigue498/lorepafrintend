import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const MoreCarDetailPage = () => {
  const [pickup, setPickup] = useState(true);
  const[isOpen,setIsOpen]=useState(false)
  const [quantity, setQuantity] = useState(0);
  const pricePerItem = 15;
  const available = 1;

  const handleIncrement = () => {
    if (quantity < available) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Left Section - Details */}
      <div className="flex-1">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Car Hauler</span>
        <h1 className="text-3xl font-bold mt-2">2025 PJ B5 20’ Car Hauler “Timmy”</h1>
        <p className="text-gray-600 mt-1">3 Trips</p>

        {/* Trailer Specs */}
        <div className="bg-gray-100 p-4 rounded-lg mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <p className="text-gray-500 text-sm">Connector</p>
            <p className="text-lg font-semibold">7-WAY</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Trailer Brakes</p>
            <p className="text-lg font-semibold">YES</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Hitch Ball Size</p>
            <p className="text-lg font-semibold">2 5/16 IN.</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Trailer Weight</p>
            <p className="text-lg font-semibold">2500 LBS</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Max Payload</p>
            <p className="text-lg font-semibold">7000 LBS</p>
          </div>
        </div>

        {/* Description */}
        <h2 className="text-xl font-bold mt-6">DESCRIPTION</h2>
        <ul className="mt-2 text-gray-700 list-disc pl-4">
          <li>Brand New 20’ Heavy Duty Car/Buggy Hauler</li>
          <li>Super Wide 102” Deck</li>
          <li>2’ Dovetail For Easy Loading</li>
          <li>Drive Over Diamond Plate Fenders</li>
          <li>5’ Rear Slide In Ramps</li>
          <li>10,000lb GVWR</li>
          <li>D-Ring Tie Down Points</li>
          <li>Rental Includes Ratchet and Axle Straps</li>
          <li>Last 6 of VIN: 671873</li>
        </ul>
      </div>

      {/* Right Section - Booking */}
      <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
        <p className="text-2xl font-bold">$100 <span className="text-gray-500 text-lg">/ day</span></p>
        <p className="text-sm text-gray-600">$100 est total*</p>

        {/* Date Picker */}
        <div className="flex gap-2 mt-4">
          <input type="date" className="w-1/2 p-2 border rounded" placeholder="Start Date" />
          <input type="date" className="w-1/2 p-2 border rounded" placeholder="End Date" />
        </div>

        {/* Pickup / Delivery Toggle */}
        <div className="flex bg-gray-200 rounded-lg mt-4">
          <button 
            className={`w-1/2 py-2 text-center font-semibold rounded-l-lg ${pickup ? "bg-gray-800 text-white" : "text-gray-600"}`}
            onClick={() => setPickup(true)}
          >
            Pickup
          </button>
          <button 
            className={`w-1/2 py-2 text-center font-semibold rounded-r-lg ${!pickup ? "bg-gray-800 text-white" : "text-gray-600"}`}
            onClick={() => setPickup(false)}
          >
            Delivery
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-1">Exact pickup/return location provided once the rental is approved.</p>

        {/* Extras */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-700 font-semibold">Extras</p>
          <button className="text-sm text-blue-600 font-medium">1 AVAILABLE</button>
        </div>

        {/* Continue Button */}
        <button onClick={()=>{setIsOpen(!isOpen)}} className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-red-600 transition">Continue</button>

        {/* More Info */}
        <div className="mt-4 text-center">
          <button className="text-gray-600 font-medium">MORE INFO ▼</button>
        </div>
        {isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-[400px] p-6">
          {/* Modal Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Extras</h2>
            <button className="text-gray-500 hover:text-gray-800 text-xl" onClick={()=>{setIsOpen(!isOpen)}}>&times;</button>
          </div>

          {/* Extra Item */}
          <div className="bg-gray-100 p-4 mt-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Race Ramps</h3>
              <span className="bg-yellow-300 text-gray-900 px-2 py-1 rounded-md text-sm font-semibold">
                ${pricePerItem} <span className="text-xs font-normal">each</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Additional ramps for loading low profile vehicles. 5.5 degree approach angle.
            </p>

            {/* Quantity Selector */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2 bg-white border rounded-lg px-2 py-1">
                <button
                  className="px-2 py-1 text-gray-500 disabled:text-gray-300"
                  onClick={handleDecrement}
                  disabled={quantity === 0}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  className="px-2 py-1 text-red-500 font-bold"
                  onClick={handleIncrement}
                  disabled={quantity >= available}
                >
                  +
                </button>
              </div>
              <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full">
                {available} AVAILABLE
              </span>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center mt-4 text-lg font-semibold">
            <span>Total:</span>
            <span className="text-gray-800">${(quantity * pricePerItem).toFixed(2)}</span>
          </div>

          {/* Done Button */}
          <button
            className="w-full bg-red-500 text-white py-2 rounded-lg mt-4"

          >
            Done
          </button>
        </div>
      </div>
    )
}
  );
      </div>
    </div>
  );
};

export default MoreCarDetailPage;
