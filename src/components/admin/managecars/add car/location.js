import React from "react";

const AddCarForm = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <nav className="text-sm text-gray-500 mb-4">
          Home &gt; Manage Cars &gt; <span className="font-medium text-gray-700">Create</span>
        </nav>
        <h1 className="text-2xl font-semibold mb-6">Add New Car</h1>
        <div>
          <div className="flex items-center mb-4">
            <button className="bg-blue-500 text-white font-medium rounded px-4 py-2">
              1. Content
            </button>
            <button className="bg-blue-700 text-white font-medium rounded px-4 py-2 mx-2">
              2. Locations
            </button>
            <button className="bg-blue-500 text-white font-medium rounded px-4 py-2">
              3. Pricing
            </button>
            <button className="bg-blue-500 text-white font-medium rounded px-4 py-2">
              4. Attributes
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-inner p-6">
            <h2 className="text-lg font-semibold mb-4">Locations</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="location">
                Location
              </label>
              <select
                id="location"
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">-- Please Select --</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="real-address">
                Real Address
              </label>
              <input
                type="text"
                id="real-address"
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="Real address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="geo-coordinate">
                The Geographic Coordinate
              </label>
              <input
                type="text"
                id="geo-coordinate"
                className="w-full border-gray-300 rounded-lg shadow-sm"
                placeholder="Search by name..."
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="latitude">
                  Map Latitude
                </label>
                <input
                  type="text"
                  id="latitude"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="Latitude"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="longitude">
                  Map Longitude
                </label>
                <input
                  type="text"
                  id="longitude"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="Longitude"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="zoom">
                  Map Zoom
                </label>
                <input
                  type="number"
                  id="zoom"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  defaultValue="8"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white font-medium rounded-lg px-6 py-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarForm;
