import React from "react";
import ford from '../../../../assets/ford.jpg'
import rv from '../../../../assets/rv4.jpeg'
import civic from '../../../../assets/civic.jpeg'
import fortwo from '../../../../assets/fortwo.jpg'

const ManageCars = () => {
  const cars = [
    {
      id: 1,
      name: "2019 Audi S3",
      location: "Los Angeles",
      price: 300,
      status: "Publish",
      lastUpdated: "08/23/2023 05:40",
      image: ford, 
      featured: true,
    },
    {
      id: 2,
      name: "2019 BMW M6 Gran Coupe",
      location: "Paris",
      price: 300,
      status: "Publish",
      lastUpdated: "08/23/2023 05:40",
      image: rv,
      featured: true,
    },
    {
      id: 3,
      name: "2019 Honda Clarity",
      location: "California",
      price: 300,
      status: "Publish",
      lastUpdated: "08/23/2023 05:40",
      image: civic,
      featured: false,
    },
  ];

  return (
    <div className=" bg-gray-100 p-8">
      <div className=" bg-white p-6 rounded-lg shadow-md">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-700">Home</span> &gt;{" "}
          <span className="font-medium text-gray-700">Manage Cars</span> &gt;{" "}
          <span className="font-medium text-gray-700">All</span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Manage Cars</h1>
          <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-blue-700">
            Add Car
          </button>
        </div>

        {/* Car List */}
        <div>
          <p className="text-sm text-gray-500 mb-4">
            Showing 1 - {cars.length} of {cars.length} Cars
          </p>
          <div className="space-y-4">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white border rounded-lg shadow p-4 flex gap-4 items-start"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {car.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    <span className="block">
                      📍 Location: {car.location}
                    </span>
                    <span className="block">💲 Price: ${car.price}</span>
                    <span className="block">
                      📄 Status:{" "}
                      <span className="bg-green-200 text-green-600 text-md px-2 py-1 rounded-md">
                        {car.status}
                      </span>
                    </span>
                    <span className="block text-md text-gray-500">
                      Last Updated: {car.lastUpdated}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {car.featured && (
                    <span className="bg-blue-500 text-white text-md px-2 py-1 rounded-md">
                      Featured
                    </span>
                  )}
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-1 px-2 rounded-md text-sm">
                    View
                  </button>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-1 px-2 rounded-md text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded-md text-sm">
                    Del
                  </button>
                  <button className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-1 px-2 rounded-md text-sm">
                    Make hide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCars;
