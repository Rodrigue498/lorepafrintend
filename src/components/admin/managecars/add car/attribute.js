import React from "react";

const AttributesForm = ({ formData = { attributes: {} }, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // ✅ This ensures `max_payload` is updated correctly
      attributes: { ...prev.attributes, [name]: value }, 
    }));
  };
  

  const handleNext = () => {
    onNext({ attributes: formData.attributes });
  };

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Attributes</h2>

        {/* Color Input */}
        <label className="block text-gray-700 mb-2">Price</label>
        <input
          type="text"
          name="price"
          value={formData?.attributes?.price|| ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-4"
          placeholder="Enter Price"
        />
         <label className="block text-gray-700 mb-2">Trailer brakes</label>
        <input
          type="text"
          name="trailer_brakes"
          value={formData?.attributes?.trailer_brakes|| ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-4"
          placeholder="Enter Trailer brakes"
        />
         <label className="block text-gray-700 mb-2">Hitch ball size</label>
        <input
          type="text"
          name="hitch_ball_size"
          value={formData?.attributes?.hitch_ball_size|| ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-4"
          placeholder="Enter Hitch ball size"
        />
                <label className="block text-gray-700 mb-2">Max Payload</label>
<input
  type="text"
  name="max_load"
  value={formData?.attributes?.max_load || ""}
  onChange={handleChange}
  className="w-full border-gray-300 rounded-lg shadow-sm p-2 mb-4"
  placeholder="Enter Max Payload"
/>


        


        <button
          onClick={handleNext}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AttributesForm;
