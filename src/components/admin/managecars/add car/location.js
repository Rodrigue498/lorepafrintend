import React from "react";

const AddCarForm = ({ formData = { location: {} }, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: value },
    }));
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prev) => ({
            ...prev,
            location: { ...prev.location, latitude, longitude },
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to fetch location. Please enable GPS.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleNext = () => {
    onNext({ location: formData.location });
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Locations</h2>

        {/* Location Dropdown */}
        <label className="block text-gray-700 mb-2">Location</label>
        <select
          name="place"
          value={formData.location.place || ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm"
        >
          <option value="">-- Please Select --</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
        </select>

        {/* Real Address Input */}
        <label className="block text-gray-700 mb-2 mt-4">Real Address</label>
        <input
          type="text"
          name="realAddress"
          value={formData.location.location || ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm"
        />

        {/* Use Current Location Button */}
        <button
          onClick={handleUseCurrentLocation}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Use Current Location
        </button>

        {formData.location.latitude && formData.location.longitude && (
          <p className="mt-2 text-gray-600">
            📍 Location: {formData.location.latitude}, {formData.location.longitude}
          </p>
        )}

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

export default AddCarForm;
