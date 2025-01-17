import React, { useState } from "react";

const carsData = [
  {
    id: 1,
    name: "Toyota RAV4 2015",
    price: 144,
    location: "Montreal",
    rating: 5.0,
    reviews: 15,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Ford Focus 2016",
    price: 154,
    location: "Montreal",
    rating: 4.98,
    reviews: 221,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Honda Civic 2025",
    price: 177,
    location: "Montreal",
    rating: 5.0,
    reviews: 9,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Smart EQ Fortwo 2019",
    price: 190,
    location: "Montreal",
    rating: 5.0,
    reviews: 23,
    image: "https://via.placeholder.com/200",
  },
];

const CarRental = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
    const filtered = carsData.filter((car) =>
      car.name.toLowerCase().includes(value)
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-xl font-bold">Car Rental</h1>
          <input
            type="text"
            placeholder="Search for cars..."
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-96"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Car List */}
        <section className="col-span-2">
          <h2 className="text-xl font-bold mb-4">Available Cars</h2>
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 mb-4"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg">{car.name}</h3>
                <p className="text-gray-500">{car.location}</p>
                <p className="text-green-500 font-bold">${car.price} total</p>
                <p className="text-sm text-gray-400">
                  {car.rating}★ ({car.reviews} reviews)
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Map Placeholder */}
        <section className="bg-white p-4 rounded-lg shadow-md h-96">
          <h2 className="text-xl font-bold mb-4">Map</h2>
          <p className="text-gray-500">Map will be displayed here.</p>
        </section>
      </main>
    </div>
  );
};

export default CarRental;
