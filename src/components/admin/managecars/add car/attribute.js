import React from "react";

const AttributesForm = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <nav className="text-sm text-gray-500 mb-4">
          Home &gt; Manage Cars &gt; <span className="font-medium text-gray-700">Create</span>
        </nav>
        <h1 className="text-2xl font-semibold mb-6">Add New Car</h1>

        <div className="flex items-center mb-4">
          <button className="bg-blue-500 text-white font-medium rounded px-4 py-2">
            1. Content
          </button>
          <button className="bg-blue-500 text-white font-medium rounded px-4 py-2 mx-2">
            2. Locations
          </button>
          <button className="bg-blue-500 text-white font-medium rounded px-4 py-2">
            3. Pricing
          </button>
          <button className="bg-blue-700 text-white font-medium rounded px-4 py-2">
            4. Attributes
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-inner p-6">
          <h2 className="text-lg font-semibold mb-4">Attribute: Car Type</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              "Convertibles",
              "Coupes",
              "Hatchbacks",
              "Minivans",
              "Sedan",
              "SUVs",
              "Trucks",
              "Wagons",
            ].map((type) => (
              <label key={type} className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4">Attribute: Car Features</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              "Airbag",
              "FM Radio",
              "Power Windows",
              "Sensor",
              "Speed Km",
              "Steering Wheel",
            ].map((feature) => (
              <label key={feature} className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-600 text-white font-medium rounded-lg px-6 py-2">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttributesForm;
