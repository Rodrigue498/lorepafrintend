import React, { useState, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import fortwoImage from "../../assets/fortwo.jpg";
import { useLocation } from "react-router-dom";

import axios from "axios";

const CarRental = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [trailers, setTrailers] = useState([]); // Store all trailers from API
  const [filteredTrailers, setFilteredTrailers] = useState([]); // Store filtered trailers
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mapSrc, setMapSrc] = useState(""); // Add this line

const queryParams = new URLSearchParams(location.search);
const selectedCategory = queryParams.get("category") || "";


  // ✅ State for Filters
  const [filters, setFilters] = useState({
    price_min: "",
    price_max: "",
    type: "",
    features: "",
    size_min: "",
    size_max: "",
  });

  const API_URL = process.env.REACT_APP_API_URL;

  // ✅ Function to fetch trailers (Initially loads all trailers)
  const fetchTrailers = () => {
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL}/trailers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        setTrailers(response.data.data || response.data); // Store all trailers
        setFilteredTrailers(response.data.data || response.data); // Initially, show all trailers
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data?.message || "Failed to fetch data");
        setLoading(false);
      });
  };
  const initialFilters = {
    place: queryParams.get("place") || "",
    departure: queryParams.get("departure") || "",
    arrival: queryParams.get("arrival") || "",
    price_min: queryParams.get("price_min") || "",
    price_max: queryParams.get("price_max") || "",
    type: queryParams.get("type") || "",
};

  // Fetch trailers when component mounts
  useEffect(() => {
    fetchTrailers();
}, []);

useEffect(() => {

  setFilters({
    place: queryParams.get("place") || "",
    departure: queryParams.get("departure") || "",
    arrival: queryParams.get("arrival") || "",
    price_min: queryParams.get("price_min") || "",
    price_max: queryParams.get("price_max") || "",
    type: queryParams.get("type") || "",
  });

  // ✅ Update Google Maps iframe if "place" is present
  const place = queryParams.get("place");
  if (place) {
    setMapSrc(
      `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEYS}&q=${encodeURIComponent(place)}`
    );
  }
}, [location.search]);


useEffect(() => {
  if (trailers.length > 0) {
      applyFilters();
  }
}, [trailers, filters, initialFilters]);



  // ✅ Handle Filter Changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // ✅ Apply Filters
  const applyFilters = () => {
    let filtered = trailers;

    if (filters.price_min) {
        filtered = filtered.filter(trailer => trailer.price >= filters.price_min);
    }

    if (filters.price_max) {
        filtered = filtered.filter(trailer => trailer.price <= filters.price_max);
    }

    if (filters.type) {
        filtered = filtered.filter(trailer => trailer.type === filters.type);
    }

    if (filters.features) {
        filtered = filtered.filter(trailer =>
            (trailer.features ? trailer.features.toLowerCase() : "").includes(filters.features.toLowerCase())
        );
    }

    if (filters.size_min) {
        filtered = filtered.filter(trailer => trailer.size >= filters.size_min);
    }

    if (filters.size_max) {
        filtered = filtered.filter(trailer => trailer.size <= filters.size_max);
    }

    if (initialFilters.place) {
        filtered = filtered.filter(trailer =>
            (trailer.location ? trailer.location.toLowerCase() : "").includes(initialFilters.place.toLowerCase())
        );
    }
    if (selectedCategory) {
      filtered = filtered.filter(trailer =>
        trailer.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredTrailers(filtered);
};

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Filters Section */}
      <div className="pt-24 flex flex-wrap items-center space-x-2 p-4 border border-gray-300 rounded-lg bg-white">

        {/* Price Min */}
        <input
          type="number"
          name="price_min"
          placeholder="Min Price"
          value={filters.price_min}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100"
        />

        {/* Price Max */}
        <input
          type="number"
          name="price_max"
          placeholder="Max Price"
          value={filters.price_max}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100"
        />

        {/* Vehicle Type */}
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100"
        >
          <option value="">All Types</option>
          <option value="Enclosed">Enclosed</option>
          <option value="Utility">Utility</option>
          <option value="Car Hauler">Car Hauler</option>
        </select>

        {/* Features */}
        <input
          type="text"
          name="features"
          placeholder="Features"
          value={filters.features}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100"
        />

        {/* Size Min */}
        <input
          type="number"
          name="size_min"
          placeholder="Min Size"
          value={filters.size_min}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100"
        />

        {/* Size Max */}
        <input
          type="number"
          name="size_max"
          placeholder="Max Size"
          value={filters.size_max}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100"
        />

        {/* Apply Filters Button */}
        <button
          className="px-3 py-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>

      {/* Show loading or error messages */}
      {loading && <p className="text-center mt-6 text-gray-600">Loading trailers...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Main Content */}
      {!loading && !error && (
        <main className="mt-6 mx-auto grid grid-cols-2 gap-0 h-screen">
          {/* Car List */}
          <section className="bg-white p-4 rounded-lg shadow-md overflow-auto">
            <h2 className="text-xl font-bold mb-4">Available Trailers</h2>
            {filteredTrailers.length === 0 ? (
              <p>No trailers available</p>
            ) : (
              filteredTrailers.map((trailer) => (
                <div
                  key={trailer.id}
                  onClick={() => navigate(`/car/${trailer.id}`)}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 mb-4 cursor-pointer"
                >
                  {/* Show image from API */}
                  <img
                    src={trailer.images && trailer.images.length > 0 ? trailer.images[0] : fortwoImage}
                    alt={trailer.title}
                    className="w-64 h-64 object-cover rounded-lg"
                  />


                  <div className="flex-1">
                    <h3 className="font-bold text-2xl">{trailer.title}</h3>
                    <p className="text-gray-500 text-xl">{trailer.type}</p>
                    <p className="text-green-500 font-bold text-xl">${trailer.price} per day</p>
                  </div>
                </div>
              ))
            )}
          </section>

          {/* Map Section */}
          <section className="w-full h-screen rounded-lg shadow-lg">
          <iframe
  className="w-full h-full rounded-lg"
  src={mapSrc || "https://www.google.com/maps/embed?pb=..."} // ✅ Use mapSrc here
  allowFullScreen
  loading="lazy"
></iframe>

          </section>
        </main>
      )}
    </div>
  );
};

export default CarRental;
