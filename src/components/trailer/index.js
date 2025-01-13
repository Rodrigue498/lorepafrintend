import React from "react";

const TrailerRentalPage = () => {
    return (
        <div className="bg-gray-50 h-[1000px] flex justify-center items-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col ml-72 text-center">
                <div className="flex">
                    <h1 className="text-9xl lg:text-7xl font-bold text-gray-900 ml-24">
                        The new way <br /> to
                        <span className="text-blue-600"> rent a </span>
                        <br />
                        <span className="text-blue-600">trailer 24/7!</span>
                    </h1>
                    <p className="text-xl text-gray-900 mt-24 ml-24">
                        Discover the premier <br /> platform for trailer sharing
                        <br /> between individuals in Quebec.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    {/* Left Text Content */}
                    <div className="lg:max-w-lg">
                        <p className="text-md text-gray-800 mb-8">
                            Our company is the leading sharing platform where you can
                            <br /> book any type of trailer from private individuals,
                            whatever<br /> the occasion, with a dynamic community of
                            trusted hosts.
                        </p>
                        <div className="flex flex-col items-center">
                            {/* Avatar group */}
                            <div className="flex -space-x-2 mb-4">
                                <img
                                    className="w-14 h-14 rounded-full border-2 border-white"
                                    src={require("../../assets/wom1.jpg")}
                                    alt="User"
                                />
                                <img
                                    className="w-14 h-14 rounded-full border-2 border-white"
                                    src={require("../../assets/wom4.jpg")}
                                    alt="User"
                                />
                                <img
                                    className="w-14 h-14 rounded-full border-2 border-white"
                                    src={require("../../assets/wom2.jpeg")}
                                    alt="User"
                                />
                                <img
                                    className="w-14 h-14 rounded-full border-2 border-white"
                                    src={require("../../assets/wom3.jpeg")}
                                    alt="User"
                                />
                                <img
                                    className="w-14 h-14 rounded-full border-2 border-white"
                                    src={require("../../assets/wom1.jpg")}
                                    alt="User"
                                />
                                <img
                                    className="w-14 h-14 rounded-full border-2 border-white"
                                    src={require("../../assets/wom3.jpeg")}
                                    alt="User"
                                />
                                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                                    +
                                </div>
                            </div>
                            <p className="text-lg text-black font-md font-bold">
                                You are one of 1,000+ people who
                                <br /> trust us completely—thank you!
                            </p>
                        </div>
                    </div>
                    {/* Right Image Section */}
                    <div className="relative w-[700px]">
                        <img
                            className="rounded-lg shadow-lg w-full"
                            src={require("../../assets/trailer.png")}
                            alt="Trailer"
                        />
                        <a
                            href="#"
                            className="absolute bottom-0.5 right-2 bg-gradient-to-r no-underline from-purple-600 to-pink-500 text-white w-24 h-24 rounded-full shadow-lg text-md font-large flex items-center justify-center"
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
