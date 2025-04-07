import React from "react";
import { FaHandHoldingUsd, FaCalendarTimes, FaDollarSign, FaComments } from "react-icons/fa";

const WhyLorepa = () => {
    const featuresLeft = [
        {
            icon: <FaHandHoldingUsd className="text-blue-500 text-4xl" />,
            title: "Easy and Profitable: Rent Your Trailer to Others!",
            description: "Join us and contribute to a secure rental community.",
        },
        {
            icon: <FaCalendarTimes className="text-blue-500 text-4xl" />,
            title: "Free Cancellation",
            description:
                "Cancel for a full refund up to 24 hours before the rental starts. Life happens, and flexibility matters.",
        },
    ];

    const featuresRight = [
        {
            icon: <FaDollarSign className="text-blue-500 text-4xl" />,
            title: "Earn Money When Not Using Your Trailer!",
            description: "Offer a solution to local people while increasing your revenue.",
        },
        {
            icon: <FaComments className="text-blue-500 text-4xl" />,
            title: "Our Support Team Is Just a Message Away!",
            description: "Chat with us for fast and personalized assistance.",
        },
    ];

    return (
        <div className="bg-white-50 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Title */}
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                    Why Lorepa?
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
                                {/* Icon */}
                                <div className="w-14 h-14 mx-auto flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                {/* Title */}
                                <a
                                    href="/"
                                    className="text-2xl font-semibold no-underline text-gray-800 mt-4 block"
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
                            src={require("../../assets/whylorepa.png")}
                            alt="Trailer"
                            className="w-full h-[34rem] rounded-lg shadow-lg mt-4"
                        />
                        <button className="w-60 bottom-4 px-8 py-2 mt-4 bg-gray-50 rounded-3xl text-xl font-semibold border border-black-300">
                            Get Started
                        </button>
                    </div>

                    {/* Right Features */}
                    <div className="space-y-12 flex-1">
                        {featuresRight.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center relative mt-8 flex flex-col h-full justify-between"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 mx-auto flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                {/* Title */}
                                <a
                                    href="/"
                                    className="text-2xl font-semibold no-underline text-gray-800 mt-4 block"
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

export default WhyLorepa;
