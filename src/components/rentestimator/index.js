import { useState } from "react";

const TrailerRentalEstimator = () => {
  const [trailerType, setTrailerType] = useState("");
  const [days, setDays] = useState(1);
  const [straps, setStraps] = useState(false);
  const [dolly, setDolly] = useState(false);

  // ✅ Updated Trailer Pricing
  const trailerRates = {
    "Fermée 5' x 8' x 60": 40,
    "Fermée 5' x 8' x 72 rampe": 45,
    "Fermée 5' x 10' x 72": 50,
    "Fermée 5' x 10' x 72 rampe": 55,
    "Fermée 6' x 12' x 72 rampe": 70,
    "Fermée 6' x 12' essieu double": 80,
    "Fermée 7' x 14' x 78": 85,
    "Fermée 7' x 14' x 84 rampe": 90,
    "Fermée 7' x 16' x 78 rampe": 95,
    "Fermée 7' x 16' x 84 rampe": 100,
    "Fermée 8' x 20' x 78 rampe": 110,
    "Fermée 8' x 20' x 88 rampe": 115,
    "Fermée 8' x 24' x 78 rampe": 125,
    "Fermée 8' x 24' x 84 rampe": 130,
    "Ouverte 4' x 8'": 40,
    "Ouverte 5' x 8'": 50,
    "Ouverte 5' x 10' rampe": 55,
    "Ouverte 5' x 10' tandem": 60,
    "Ouverte 5' x 10' plato-lift": 70,
    "Ouverte 6' x 12'": 75,
    "Ouverte 6' x 12' rampe tandem": 80,
    "Plateforme 6' x 20'": 115,
    "Plateforme 7' x 14'": 80,
    "Plateforme 8' x 16'": 90,
    "Plateforme 8' x 18'": 100,
    "Plateforme 8' x 20'": 125,
    "Plateforme 8'6' x 24'": 140,
    "Dompeur 5' x 10'": 100,
    "Dompeur 6' x 12'": 110,
    "Dompeur 7' x 14'": 150,
    "Gooseneck 8'6' x 24' basculante": 215,
    "Gooseneck 8'6' x 30' avec rampe": 230,
  };

  const accessoryRates = {
    straps: 5,
    dolly: 10,
  };

  // ✅ Apply Discount Based on Rental Days
  const calculateRevenue = () => {
    const baseCost = trailerRates[trailerType] || 0;
    const accessoryCost = (straps ? accessoryRates.straps : 0) + (dolly ? accessoryRates.dolly : 0);
    
    let total = (baseCost + accessoryCost) * days;

    if (days >= 7) {
      total *= 0.85; // 15% Discount
    } else if (days >= 5) {
      total *= 0.90; // 10% Discount
    } else if (days >= 3) {
      total *= 0.95; // 5% Discount
    }

    return total.toFixed(2);
  };

  return (
    <div className="p-6 mx-auto bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-5xl font-bold text-center">Your Trailer Can Earn You An Average of $850/Month*</h2>
      
      {/* Estimator */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <h3 className="text-2xl font-semibold">Estimate Your Rental Revenue</h3>

        {/* Trailer Selection */}
        <div className="mt-2">
          <label className="block font-medium text-xl">Your Trailer</label>
          <select
            className="w-full p-2 border rounded-md mt-1"
            value={trailerType}
            onChange={(e) => setTrailerType(e.target.value)}
          >
            <option value="">Select a Trailer</option>
            {Object.keys(trailerRates).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Rental Days */}
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

        {/* Accessories */}
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

      {/* Summary */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-xl">Summary</h3>
        <p className="text-lg">Trailer Type: {trailerType || "Not selected"}</p>
        <p className="text-lg">Number of Days: {days}</p>
        <p className="text-lg">Accessories Cost: ${straps || dolly ? (straps ? accessoryRates.straps * days : 0) + (dolly ? accessoryRates.dolly * days : 0) : 0.00}</p>
        <p className="text-xl font-bold text-xl mt-2">Rental Revenue: ${calculateRevenue()}</p>
      </div>
    </div>
  );
};

export default TrailerRentalEstimator;
