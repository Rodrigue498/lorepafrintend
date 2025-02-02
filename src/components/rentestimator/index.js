import { useState } from "react";

const TrailerRentalEstimator = () => {
  const [trailerType, setTrailerType] = useState("");
  const [days, setDays] = useState(1);
  const [straps, setStraps] = useState(false);
  const [dolly, setDolly] = useState(false);

  const trailerRates = {
    "Small Trailer": 30,
    "Medium Trailer": 50,
    "Large Trailer": 70,
  };

  const accessoryRates = {
    straps: 5,
    dolly: 10,
  };

  const calculateRevenue = () => {
    const trailerCost = trailerRates[trailerType] || 0;
    const accessoryCost = (straps ? accessoryRates.straps : 0) + (dolly ? accessoryRates.dolly : 0);
    return (trailerCost + accessoryCost) * days;
  };

  return (
    <div className="p-6 mx-auto bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-5xl font-bold text-center">Your Trailer Can Earn You An Average of $850/Month*</h2>
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <h3 className="text-2xl font-semibold">Estimate Your Rental Revenue</h3>
        <div className="mt-2">
          <label className="block font-medium text-xl">Your Trailer</label>
          <select
            className="w-full p-2 border rounded-md mt-1"
            value={trailerType}
            onChange={(e) => setTrailerType(e.target.value)}
          >
            <option value="">Select a value</option>
            {Object.keys(trailerRates).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="block font-medium text-xl">Number of Days: {days}</label>
          <input
            type="range"
            min="1"
            max="360"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="mt-4">
          <label className="block font-medium text-xl">Accessories</label>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input type="checkbox" checked={straps} onChange={() => setStraps(!straps)} className="mr-2"/> Straps
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={dolly} onChange={() => setDolly(!dolly)} className="mr-2"/> Dolly
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-xl">Summary</h3>
        <p className="text-lg">Trailer Type: {trailerType || "Not selected"}</p>
        <p className="text-lg">Number of Days: {days}</p>
        <p className="text-lg">Accessories: ${straps || dolly ? (straps ? accessoryRates.straps * days : 0) + (dolly ? accessoryRates.dolly * days : 0) : 0.00}</p>
        <p className="text-xl font-bold text-xl mt-2">Rental Revenue: ${calculateRevenue().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TrailerRentalEstimator;
