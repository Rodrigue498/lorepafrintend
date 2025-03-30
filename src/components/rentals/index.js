import React from "react";

const TrailerRental = () => {
    const featuresLeft = [
        {
            title: "Trailers available near you",
            description:
                "Choose from hundreds of trailers available from individuals and professionals near you.",
        },
        {
            title: "Daily or weekly pricing",
            description:
                "Your rental will be insured with your car insurance policy. You can also choose to rent additional accessories to make your rental easy!",
        },
    ];

    const featuresRight = [
        {
            title: "Book your trailer ",
            description:
                "Book a trailer near you instantly, even at the last minute. Avoid waiting lines and agency fees!",
        },
        {
            title: "Available throughout Quebec",
            description:
                "No matter where you live, our hosts allow you to find a trailer near you, ready to go. For a few days or a few weeks, and return to your starting point once finished.",
        },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Title */}
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                    Trailer rental for all occasions
                </h1>

                {/* Content Layout */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                    {/* Left Features */}
                    <div className="space-y-12 flex-1">
                        {featuresLeft.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center relative mt-8 flex flex-col h-full justify-between"
                            >
                                {/* Gradient Circle */}
                                <div className="bg-gradient-to-r from-gray-400 to-gray-600 w-14 h-14 rounded-full mx-auto flex items-center justify-center" />
                                {/* Title */}
                                <a
                                    href="/"
                                    className="text-4xl font-semibold no-underline text-gray-800 mt-4 block"
                                >
                                    {feature.title}
                                </a>
                                {/* Description */}
                                <p className="text-lg text-gray-600 mt-2">
                                    {feature.description}
                                </p>
                                {/* Divider Line */}
                                {index !== featuresLeft.length - 1 && (
                                    <hr className="border-gray-300 w-3/4 mx-auto mt-12" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div className="flex-1">
                        <img
                            src={require("../../assets/rental.png")}
                            alt="Trailer"
                            className="w-full h-[24rem] rounded-lg shadow-lg mt-4"
                        />

                    </div>

                    {/* Right Features */}
                    <div className="space-y-12 flex-1">
                        {featuresRight.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center relative mt-8 flex flex-col h-full justify-between"
                            >
                                {/* Gradient Circle */}
                                <div className="bg-gradient-to-r from-gray-400 to-gray-600 w-14 h-14 rounded-full mx-auto flex items-center justify-center" />
                                {/* Title */}
                                <a
                                    href="/"
                                    className="text-4xl font-semibold no-underline text-gray-800 mt-4 block"
                                >
                                    {feature.title}
                                </a>
                                {/* Description */}
                                <p className="text-lg text-gray-600 mt-2">
                                    {feature.description}
                                </p>
                                {/* Divider Line */}
                                {index !== featuresRight.length - 1 && (
                                    <hr className="border-gray-300 w-3/4 mx-auto mt-12" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerRental;
