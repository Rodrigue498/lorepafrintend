import React from "react";

const PricingForm = () => {
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
            <button className="bg-blue-500 text-white font-medium rounded px-4 py-2 mx-2">
              2. Locations
            </button>
            <button className="bg-blue-700 text-white font-medium rounded px-4 py-2">
              3. Pricing
            </button>
            <button className="bg-blue-500 text-white font-medium rounded px-4 py-2">
              4. Attributes
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-inner p-6">
            <h2 className="text-lg font-semibold mb-4">Default State</h2>
            <div className="mb-6">
              <select
                id="default-state"
                className="w-full border-gray-300 rounded-lg shadow-sm"
              >
                <option>Only available on specific dates</option>
              </select>
            </div>

            <h2 className="text-lg font-semibold mb-4">Pricing</h2>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="car-number">
                  Number
                </label>
                <input
                  type="text"
                  id="car-number"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="Car Number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="sale-price">
                  Sale Price
                </label>
                <input
                  type="text"
                  id="sale-price"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="Car Sale Price"
                />
                <p className="text-sm text-gray-500 mt-1">
                  If the regular price is less than the discount, it will show the regular price.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="min-advance-reservations">
                  Minimum advance reservations
                </label>
                <input
                  type="text"
                  id="min-advance-reservations"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="Ex: 3"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Leave blank if you don't need to use the min day option.
                </p>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="min-stay">
                  Minimum day stay requirements
                </label>
                <input
                  type="text"
                  id="min-stay"
                  className="w-full border-gray-300 rounded-lg shadow-sm"
                  placeholder="Ex: 2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Leave blank if you don't need to set a minimum day stay option.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-700">Enable extra price</span>
              </label>
            </div>
            <div className="mb-6">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-700">Enable service fee</span>
              </label>
            </div>

            <h2 className="text-lg font-semibold mb-4">Specifications</h2>
            <div className="bg-white rounded-lg border border-gray-300">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="border-b bg-gray-200">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Desc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="w-full border-gray-300 rounded"
                        placeholder="Specification Name"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        className="w-full border-gray-300 rounded"
                        placeholder="Description"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <button className="bg-blue-600 text-white font-medium rounded-lg px-4 py-2">
                + Add Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingForm;
