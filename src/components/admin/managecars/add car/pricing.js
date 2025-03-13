import React from "react";

const PricingForm = ({ formData, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      pricing: { ...prev.pricing, [name]: value },
    }));
  };

  const handleNext = () => {
    onNext({ pricing: formData.pricing });
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Pricing</h2>

        {/* Price Input */}
        <label className="block text-gray-700 mb-2">Price</label>
        <input
          type="number"
          name="pricePerDay"
          value={formData.pricing.pricing || ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2"
          placeholder="Enter price"
        />

        {/* Price Type Dropdown */}
        <label className="block text-gray-700 mt-4 mb-2">Price Type</label>
        <select
          name="priceType"
          value={formData.pricing.type || ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2"
        >
          <option value="">Select Price Type</option>
          <option value="per_day">Per Day</option>
          <option value="per_hour">Per Hour</option>
          <option value="flat_rate">Flat Rate</option>
        </select>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PricingForm;
