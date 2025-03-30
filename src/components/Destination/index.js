import React from "react";

const TopDestinations = () => {
    const destinations = [
        { name: "Montréal", location: "Saguency", image: require("../../assets/monteral.jpg") },
        { name: "Québec", location: "Quebec", image: require("../../assets/qubec.png") },
        { name: "Gatineau", location: "Gatineau", image: require("../../assets/gatienu.png") },
        { name: "Sherbrooke", location: "Sherbrooke", image: require("../../assets/sherb.png") },
        { name: "Lévis", location: "Levis", image: require("../../assets/levis.png") },

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
                                {/* <div className="text-sm text-gray-600 leading-none">{destination.location}</div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDestinations;
