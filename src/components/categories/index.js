import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Cars",
    image: require('../../assets/civic.jpeg'),
  },
  {
    title: "Convertibles",
    image: require('../../assets/fortwo.jpg'), 
  },
  {
    title: "Exotic & Luxury Cars",
    image: require('../../assets/ford.jpg'),
  },
  {
    title: "Minivans",
    image: require('../../assets/rv4.jpeg'), 
  },
  {
    title: "SUVs",
    image: require('../../assets/civic.jpeg'), 
  },
  {
    title: "Trucks",
    image: require('../../assets/fortwo.jpg'), 
  },
  {
    title: "Campers",
    image: require('../../assets/ford.jpg'), 
  },
  {
    title: "Motorcycles",
    image: require('../../assets/rv4.jpeg'), 
  },
];

const CategoryCarousel = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 200; // Adjust for card width
      carouselRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Function to navigate with selected category
  const handleCategoryClick = (category) => {
    navigate(`/categories?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Browse Categories
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("prev")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 border-0 bg-gray-300 text-white rounded-full p-2 z-10"
          >     
            ❮
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 border-0 bg-gray-300 text-white rounded-full p-2 z-10"
          >
            ❯
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-none w-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleCategoryClick(category.title)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 text-center">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
