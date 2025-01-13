import React, { useState } from "react";

const TrailerCategories = () => {
    const categories = [
        {
            title: "Enclosed",
            image: require("../../assets/enclosed.png"),
        },
        {
            title: "FlatBed",
            image: require("../../assets/flatbed.png"),
        },
        {
            title: "Utility",
            image: require("../../assets/utility.png"),
        },
        {
            title: "Utility",
            image: require("../../assets/utility.png"),
        },
        {
            title: "Utility",
            image: require("../../assets/utility.png"),
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentCategories = categories.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="bg-gray-50 py-8 px-4">
            <h2 className="text-center text-2xl font-bold mb-6">
                Trailers by Categories
            </h2>
            <div className="flex justify-center items-center">
                {categories.length > itemsPerPage && (
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 0}
                        className={`p-2 rounded-full ${currentPage === 0
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        <img
                            src={require("../../assets/arrow.png")}
                            alt="Previous"
                            className="w-6 h-6"
                        />
                    </button>
                )}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mx-4">
                    {currentCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex items-center justify-between">
                                <h3 className="text-lg font-semibold">{category.title}</h3>
                                <button className="bg-blue-500 text-white p-2 rounded-full  hover:bg-blue-600">
                                    {category.title === "Enclosed" ? (
                                        <img
                                            src={require("../../assets/arrow.png")}
                                            alt="Special Icon"
                                            className="w-5 h-5"
                                        />
                                    ) : (
                                        <img
                                            src={require("../../assets/arrow.png")}
                                            alt="Next"
                                            className="w-5 h-5"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {categories.length > itemsPerPage && (
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className={`p-2 rounded-full ${currentPage === totalPages - 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default TrailerCategories;
