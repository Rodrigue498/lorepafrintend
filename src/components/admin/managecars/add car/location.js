import React from "react";

const AddCarForm = ({ formData, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let newValue = type === "number" ? Number(value) : value;
  
    setFormData((prev) => {
      
   if (["address"].includes(name)) {
        return {
          ...prev,
          location: {
            ...prev.location,
            [name]: newValue,
          },
        };
      }
      return { ...prev, [name]: newValue };
    });
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
    onNext(formData); // ✅ Pass entire formData to preserve all data
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Locations</h2>

        {/* Location Input */}
        <label className="block text-gray-700 mb-2">Location</label>
        <input
          type="text"
          name="address"
          value={formData?.location?.address || ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2"
        />

        {/* Trailer Availability */}
        <label className="block text-gray-700 mb-2 mt-4">Is Trailer Available?</label>
        <select
  name="available"
  value={formData?.available?.toString()} // ✅ Ensure value is converted to a string for the select field
  onChange={handleChange}
  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
>
  <option value="">-- Select --</option>
  <option value="true">true</option>
  <option value="false">false</option>
</select>


        {/* Trailer Weight */}
        <label className="block text-gray-700 mb-2 mt-4">Trailer Weight (kg)</label>
        <input
  type="number"
  name="trailer_weight"
  value={formData?.trailer_weight || ""} // ✅ Use root-level trailer_weight
  onChange={handleChange}
  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
/>


        {/* Connector Type */}
        <label className="block text-gray-700 mb-2 mt-4">Connector Type</label>
        <input
  type="text"
  name="connector_type"
  value={formData?.connector_type || ""} // ✅ Correctly references location.connector_type
  onChange={handleChange}
  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
/>

        {/* Use Current Location Button */}
        <button
          onClick={handleUseCurrentLocation}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Use Current Location
        </button>

        {formData?.location?.latitude && formData?.location?.longitude && (
          <p className="mt-2 text-gray-600">
            📍 Location: {formData?.location?.latitude}, {formData?.location?.longitude}
          </p>
        )}

        {/* Next Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCarForm;
