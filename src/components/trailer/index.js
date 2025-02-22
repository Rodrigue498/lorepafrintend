import React from "react";

const TrailerRentalPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex justify-center items-center px-6">
            <div className="w-full max-w-7xl mx-auto flex flex-col text-center">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                            The new way <br /> to 
                            <span className="text-blue-600"> rent a </span>
                            <br />
                            <span className="text-blue-600">trailer 24/7!</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-900 mt-6">
                            Discover the premier platform for trailer sharing <br />
                            between individuals in Quebec.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between mt-12 gap-10">
                    {/* Left Text Content */}
                    <div className="lg:max-w-lg text-center lg:text-left">
                        <p className="text-md text-gray-800 mb-8">
                            Our company is the leading sharing platform where you can <br />
                            book any type of trailer from private individuals, whatever <br />
                            the occasion, with a dynamic community of trusted hosts.
                        </p>
                        <div className="flex flex-col items-center lg:items-start">
                            {/* Avatar group */}
                            <div className="flex -space-x-2 mb-4">
                                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                    <img
                                        key={index}
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white"
                                        src={require(`../../assets/wom${(index % 4) + 1}.jpg`)}
                                        alt="User"
                                    />
                                ))}
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                                    +
                                </div>
                            </div>
                            <p className="text-lg text-black font-medium font-bold">
                                You are one of 1,000+ people who <br /> trust us completely—thank you!
                            </p>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
                        <img
                            className="rounded-lg shadow-lg w-full"
                            src={require("../../assets/trailer.png")}
                            alt="Trailer"
                        />
                        <a
                            href="#"
                            className="absolute bottom-4 right-4 bg-gradient-to-r no-underline from-purple-600 to-pink-500 text-white w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg text-md flex items-center justify-center"
                        >
                            Discover
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerRentalPage;
