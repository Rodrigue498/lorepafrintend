import React, { useState } from "react";
import AddCarForm from "./location";
import PricingForm from "./pricing";
import AttributesForm from "./attribute";

const AddNewCar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className=" bg-gray-100 p-8">
      <div className=" mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-700">Home</span> &gt;{" "}
          <span className="font-medium text-gray-700">Manage Cars</span> &gt;{" "}
          <span className="font-medium text-gray-700">Create</span>
        </div>

        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add New Car</h1>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-6">
          <div className="flex">
            {["Content", "Locations", "Pricing", "Attributes"].map((tab, index) => (
              <button
                key={index}
                className={`flex-1 text-center py-2 text-sm font-medium ${
                  activeTab === index + 1
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabClick(index + 1)}
              >
                {index + 1}. {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
        {activeTab === 2 && <AddCarForm />}
        {activeTab === 3 && <PricingForm />}
        {activeTab === 4 && <AttributesForm />}
{activeTab === 1 && (
  <div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">CAR CONTENT</h2>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Name of the car"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                rows="5"
                placeholder="Enter content here"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* YouTube Video */}
          <div>
            <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
              YouTube Video
            </label>
            <input
              type="text"
              id="youtube"
              placeholder="YouTube link video"
              className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">FAQs</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                className="border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <textarea
                rows="1"
                placeholder="Content"
                className="border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <button
              type="button"
              className="mt-2 text-blue-500 font-medium text-sm hover:underline"
            >
              + Add Item
            </button>
          </div>

          {/* Banner Image */}
          <div>
            <label htmlFor="banner" className="block text-sm font-medium text-gray-700">
              Banner Image
            </label>
            <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500">
              <span>Upload an image</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
          </div>
           )}
        </form>
     
      </div>

    </div>
  );
};

export default AddNewCar;
