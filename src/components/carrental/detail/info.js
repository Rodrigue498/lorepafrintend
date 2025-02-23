import { useState } from "react";
import { FaCar, FaUserFriends, FaClock, FaHandsHelping, FaHeadset, FaQuestionCircle } from "react-icons/fa";

const MoreCarDetailInfo = () => {
  const [extrasOpen, setExtrasOpen] = useState(false);
  const [parkingOpen, setParkingOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Included in the Price */}
      <h2 className="text-2xl font-bold mb-4">Included in the price</h2>

      {/* Convenience Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Convenience</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FaCar className="text-gray-600 text-lg" />
            <div>
              <p className="font-semibold">Forget the rental counter</p>
              <p className="text-gray-500 text-sm">Use the app to get pickup and return instructions</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FaUserFriends className="text-gray-600 text-lg" />
            <div>
              <p className="font-semibold">Add additional drivers for free</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Extras Section */}
      <div className="border-t pt-6 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Extras</h3>
          <FaQuestionCircle className="text-gray-500" />
        </div>
        <p className="text-gray-500 text-sm">Add Extras to your trip at checkout.</p>

        {/* Conditionally Render Extras */}
        <div className="mt-3 space-y-4">
          {/* Always Visible Items */}
          <div>
            <p className="font-semibold">Phone holder</p>
            <p className="text-gray-400 text-sm">Holding a phone or other electronic device may result in a fine.</p>
            <p className="font-semibold">$3 / trip <span className="text-gray-400">1 available</span></p>
          </div>

          <div>
            <p className="font-semibold">Pet Fees</p>
            <p className="text-gray-400 text-sm">Bring your furry friend with you! Covers cleaning hair and scents.</p>
            <p className="font-semibold">$149 / trip</p>
          </div>

          {/* Hidden Extras (Show on Click) */}
          {extrasOpen && (
            <>
              <div>
                <p className="font-semibold">Child seat</p>
                <p className="text-gray-400 text-sm">
                  We offer a variety of child and booster seats. Let us know the age of your child.
                </p>
                <p className="font-semibold">$20 / day <span className="text-gray-400">4 available</span></p>
              </div>

              <div>
                <p className="font-semibold">Unlimited mileage</p>
                <p className="text-gray-400 text-sm">Go as far as you need.</p>
                <p className="font-semibold">$99 / day</p>
              </div>
            </>
          )}
        </div>

        {/* Extras Toggle Button */}
        <button 
          onClick={() => setExtrasOpen(!extrasOpen)} 
          className="mt-4 px-4 py-2 text-sm bg-gray-200 rounded-md"
        >
          {extrasOpen ? "Less" : "More"}
        </button>
      </div>

      {/* Parking Information Section */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold">Parking information</h3>
        <p className="text-gray-500 text-sm">
          ---ENGLISH--- Depending on timing we will either meet at curb or leave the keys hidden outside of the vehicle for you to pick up at your own convenience.
        </p>

        {/* Parking Toggle Button */}
        <button 
          onClick={() => setParkingOpen(!parkingOpen)} 
          className="mt-2 px-4 py-2 text-sm bg-gray-200 rounded-md"
        >
          {parkingOpen ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default MoreCarDetailInfo;
