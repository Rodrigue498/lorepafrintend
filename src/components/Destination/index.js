import React from "react";

const TopDestinations = () => {
    const destinations = [
        { name: "Halifax", location: "Nova Scotia", image: require("../../assets/cities.png") },
        { name: "Quebec City", location: "Quebec", image: require("../../assets/cities.png") },
        { name: "Montreal", location: "Quebec", image: require("../../assets/city2.png") },
        { name: "Ottawa", location: "Ontario", image: require("../../assets/cities.png") },
        { name: "Toronto", location: "Ontario", image: require("../../assets/city2.png") },
    ];

    return (
        <div className="bg-white-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
                    The top destinations other renters are currently searching for
                </h2>

                {/* Destinations Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {destinations.map((destination, index) => (
                        <div
                            key={index}
                            className=""
                        >
                            {/* Image */}
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="rounded-lg w-full h-56 object-cover"
                            />
                            {/* Text */}
                            <div className="">
                                <div className="text-lg font-semibold text-gray-900 leading-none">
                                    {destination.name}
                                </div>
                                <div className="text-sm text-gray-600 leading-none">{destination.location}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDestinations;
