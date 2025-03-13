import React from "react";

const AttributesForm = ({ formData = { attributes: {} }, setFormData, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
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
        <label className="block text-gray-700 mb-2">Color</label>
        <input
          type="text"
          name="color"
          value={formData.attributes.color || ""}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-lg shadow-sm p-2"
          placeholder="Enter color"
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
