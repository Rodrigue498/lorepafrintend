import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaCar, FaTruck, FaBox } from "react-icons/fa";

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("search");
    const [searchBarData, setSearchBarData] = useState({
        place: "Lahore, PB, PK",
        dates: "When?",
        guests: "Who is accompanying you?",
    });
    const movingBarRef = useRef(null);
    const tabsRef = useRef([]);

    const tabs = [
        { id: "search", label: "Search all VRs", icon: <FaSearch /> },
        { id: "drive", label: "To drive", icon: <FaCar /> },
        { id: "tow", label: "Tow", icon: <FaTruck /> },
        { id: "delivery", label: "Delivery", icon: <FaBox /> },
    ];

    useEffect(() => {
        const activeTabElement = tabsRef.current.find((tab) => tab.dataset.tab === activeTab);
        const movingBar = movingBarRef.current;

        if (activeTabElement && movingBar) {
            const { width, left } = activeTabElement.getBoundingClientRect();
            const parentLeft = activeTabElement.parentElement.getBoundingClientRect().left;

            movingBar.style.width = `${width}px`;
            movingBar.style.transform = `translateX(${left - parentLeft}px)`;
        }
    }, [activeTab]);

    useEffect(() => {
        // Trigger the effect to position the moving bar on initial load
        const defaultTab = tabsRef.current.find((tab) => tab.dataset.tab === "search");
        const movingBar = movingBarRef.current;

        if (defaultTab && movingBar) {
            const { width, left } = defaultTab.getBoundingClientRect();
            const parentLeft = defaultTab.parentElement.getBoundingClientRect().left;

            movingBar.style.width = `${width}px`;
            movingBar.style.transform = `translateX(${left - parentLeft}px)`;
        }
    }, []);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);

        const tabDataMap = {
            search: {
                place: "Lahore, PB, PK",
                dates: "When?",
                guests: "Who is accompanying you?",
            },
            drive: {
                place: "Karachi, SD, PK",
                dates: "Next weekend?",
                guests: "2 drivers",
            },
            tow: {
                place: "Islamabad, ISB, PK",
                dates: "Today?",
                guests: "Tow vehicle only",
            },
            delivery: {
                place: "Faisalabad, PB, PK",
                dates: "Tomorrow?",
                guests: "Delivery personnel",
            },
        };

        setSearchBarData(tabDataMap[tabId]);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${require("../../assets/main.png")})`,
            }}
            className="bg-cover bg-center h-screen bg-no-repeat bg-opacity-50 flex flex-col items-center text-white"
        >
            <div className="text-5xl font-extrabold tracking-wide mt-24">Find Your Ideal RV</div>
            <h5 className="text-lg mt-4 mb-8">
                Discover the best trailers and motorhomes for your RV adventure
            </h5>

            <div className="bg-white shadow-lg justify-center h-26 w-full max-w-5xl mx-auto p-3 flex flex-col rounded-xl">
                {/* Tabs Section */}
                <div className="relative shadow-lg item-center flex h-3 space-x-10 text-md rounded-lg p-4">
                    <div className="flex ps-48 ">
                        {tabs.map((tab, index) => (
                            <a
                                href="#"
                                key={tab.id}
                                data-tab={tab.id}
                                className={`tab-item font-small pb-2 pl-14 justify-end no-underline focus:outline-none flex items-center space-x-2 relative ${activeTab === tab.id ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                                    }`}
                                onClick={() => handleTabChange(tab.id)}
                                ref={(el) => (tabsRef.current[index] = el)}
                            >
                                <span className="text-lg">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </a>
                        ))}
                    </div>
                    {/* Moving Bar */}
                    <div
                        ref={movingBarRef}
                        className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-250"
                        style={{ width: 0, transform: "translateX(0)" }}
                    ></div>
                </div>

                {/* Search Bar */}
                <div className="flex items-center h-8 mt-6 bg-gray-100 rounded-full shadow-md px-8 py-4">
                    {/* Place */}
                    <div className="flex-1 border-r border-gray-300 py-4">
                        <label className="block text-xs text-gray-500 mb-1">Place</label>
                        <div className="font-medium text-gray-900">{searchBarData.place}</div>
                    </div>

                    {/* Dates */}
                    <div className="flex-1 border-r border-gray-300 py-4 px-6">
                        <label className="block text-xs text-gray-500 mb-1">Dates</label>
                        <div className="text-gray-400">{searchBarData.dates}</div>
                    </div>

                    {/* Guests */}
                    <div className="flex-1 py-4 px-6">
                        <label className="block text-xs text-gray-500 mb-1">Guests</label>
                        <div className="text-gray-400">{searchBarData.guests}</div>
                    </div>

                    {/* Button */}
                    <div className="py-2 pl-6">
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none">
                            Research
                        </button>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${require("../../assets/main.png")})`,
                }}
                className="bg-cover bg-center h-screen bg-no-repeat bg-opacity-50 flex flex-col items-center text-white"
            >
            </div>
        </div>
    );
};

export default HomePage;
