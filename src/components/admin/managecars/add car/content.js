import React, { useState } from "react";
import AddCarForm from "./location";
import PricingForm from "./pricing";
import AttributesForm from "./attribute";
import axios from "axios";

const AddNewCar = ({ user }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    user_id: user?.id || "",
    title: "",
    description: "",
    type: "",
    features: [],
    size: "",
    trailer_weight:"",
    max_load:"",
    connector_type:"",
    trailer_brakes:"",
    available:true,
    price: "",
    images: [],
    location: {}
  });

  const API_URL = process.env.REACT_APP_API_URL;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "features" ? value.split(",").map(f => f.trim()) : value, // ✅ Ensure features is always an array
    }));
  };
  

  // Handle image upload
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    const uploadedImageFiles = [];
  
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        const uploadResponse = await axios.post(`${API_URL}/upload`, formData, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        });
    
        // Assuming the server response contains the uploaded image URL
        uploadedImageFiles.push(uploadResponse.data.url); // You can store URLs if needed for preview purposes, but this should not be sent for form submission
      } catch (error) {
        console.error("Image upload failed:", error);
        alert("Image upload failed");
      }
    }
    
    // Instead of storing URLs in images, use the uploaded files directly in the final form submission.
    setFormData((prev) => ({
      ...prev,
      images: files,  // Store the files for final submission
    }));
  };
  

  // Store data from each step before moving forward
  const saveStepData = (stepData) => {
    setFormData((prevData) => ({ ...prevData, ...stepData }));
  };

  // Move to next tab
  const handleNext = (stepData) => {
    saveStepData({ attributes: { ...formData.attributes, ...stepData.attributes } });
    if (activeTab < 3) {
      setActiveTab(activeTab + 1);
    } else {
      handleSubmit(); // Final submission when last step is completed
    }
  };

  // Handle Form Submission after all tabs are completed

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    console.log("Submitting formData:", formData);
  
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images" && Array.isArray(value)) {
        value.forEach((url) => formDataToSend.append("images[]", url));
      } else if (key === "features" && Array.isArray(value)) {
        value.forEach((feature) => formDataToSend.append("features[]", feature));
      } else if (key === "available") {
        formDataToSend.append("available", formData.available ? "true" : "false");
      } else if (typeof value === "object") {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        formDataToSend.append(key, value);
      }
    });
    
  
    try {
      const response = await axios.post(`${API_URL}/trailers/create`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      alert("Car added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response?.data?.message || "Something went wrong");
      alert(error.response?.data?.message || "Failed to add car");
    }
  };
  
  

  return (
    <div className="bg-gray-100 p-8">
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add New Car</h1>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-6 flex">
          {["Content", "Locations", "Attributes"].map((tab, index) => (
            <button
              key={index}
              className={`flex-1 text-center py-2 text-sm font-medium ${
                activeTab === index + 1
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(index + 1)}
            >
              {index + 1}. {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Forms */}
        {activeTab === 1 && (
          <form className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">CAR CONTENT</h2>

            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Name of the car"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                placeholder="Enter description"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Features */}
            <div className="mb-4">
              <label htmlFor="features" className="block text-sm font-medium text-gray-700">
                Features
              </label>
              <input
                type="text"
                id="features"
                name="features"
                value={formData.features}
                onChange={handleChange}
                placeholder="Enter features"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="features" className="block text-sm font-medium text-gray-700">
              types
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Enter your type of vehicle"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="features" className="block text-sm font-medium text-gray-700">
                Size of trailer
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="Enter features"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Upload Image */}
            <div>
  <label className="block text-sm font-medium text-gray-700">Upload Images</label>
  <input
    type="file"
    multiple
    onChange={handleImageUpload}
    className="mt-1 block w-full"
  />
</div>


            {/* Next Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handleNext(formData)}
                className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {activeTab === 2 && <AddCarForm formData={formData} setFormData={setFormData} onNext={handleNext} />}
        {activeTab === 3 && <AttributesForm formData={formData} setFormData={setFormData} onNext={handleNext} />}
      </div>
    </div>
  );
};

export default AddNewCar;
