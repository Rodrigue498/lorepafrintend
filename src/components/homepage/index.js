import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("search");
    const [departureDate, setDepartureDate] = useState(null);
    const [arrivalDate, setArrivalDate] = useState(null);
    const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
    const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
    const [place, setPlace] = useState(null);
    
    

    const movingBarRef = useRef(null);
    const tabsRef = useRef([]);

    const tabs = [
        { id: "search", label: "Search all VRs", icon: <FaSearch /> },
        { id: "drive", label: "To drive" },
        { id: "tow", label: "Tow" },
        { id: "delivery", label: "Delivery" },
    ];

    const handleTabChange = (tabId, index) => {
        setActiveTab(tabId);
        setDepartureDate(null);
        setArrivalDate(null);
        setPlace(null);
        updateMovingBar(index);
    };

    const updateMovingBar = (index) => {
        if (movingBarRef.current && tabsRef.current[index]) {
            const { offsetLeft, offsetWidth } = tabsRef.current[index];
            movingBarRef.current.style.width = `${offsetWidth}px`;
            movingBarRef.current.style.transform = `translateX(${offsetLeft}px)`;
        }
    };

    useEffect(() => {
        const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
        updateMovingBar(activeIndex);
    }, [activeTab]);

    return (
        <div className="bg-cover bg-center h-screen bg-no-repeat bg-opacity-50 flex flex-col items-center text-white"
            style={{ backgroundImage: `url(${require("../../assets/main.png")})` }}
        >
            <div className="text-5xl font-extrabold tracking-wide mt-24">Find Your Ideal RV</div>
            <h5 className="text-lg mt-4 mb-8">
                Discover the best trailers and motorhomes for your RV adventure
            </h5>

            <div className="bg-white shadow-lg justify-center h-26 w-full max-w-7xl mx-auto p-3 flex flex-col rounded-xl">
                {/* Tabs Section */}
                <div className="relative shadow-lg item-center flex h-3 space-x-10 text-md rounded-lg p-4">
                    <div className="flex ps-48">
                        {tabs.map((tab, index) => (
                            <a
                                href="#"
                                key={tab.id}
                                data-tab={tab.id}
                                className={`ml-10 tab-item font-small pb-2 pl-14 no-underline focus:outline-none flex items-center space-x-2 relative ${activeTab === tab.id ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                                    }`}
                                onClick={() => handleTabChange(tab.id, index)}
                                ref={(el) => (tabsRef.current[index] = el)}
                            >
                                <span className="text-lg">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </a>
                        ))}
                    </div>
                    <div
                        ref={movingBarRef}
                        className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-250"
                        style={{ width: 0, transform: "translateX(0)" }}
                    ></div>
                </div>

                {/* Search Bar */}
                <div className="flex items-center h-8 mt-6 bg-gray-100 rounded-full shadow-md px-8 py-4">
                    {/* Place Search with Google Autocomplete */}
                    <div className="flex-1 border-r border-gray-300 py-4">
                        <label className="block text-xs text-gray-500 mb-1">Place</label>
                        <GooglePlacesAutocomplete
                            key={activeTab} // Forces re-render when tab changes
                            apiKey={process.env.API_KEY}
                            selectProps={{
                                value: place,
                                onChange: setPlace,
                                placeholder: "City, airport, address or hotel",
                                styles: {
                                    control: (provided) => ({
                                        ...provided,
                                        borderRadius: "8px",
                                        padding: "8px",
                                        fontSize: "14px",
                                        border: "0",
                                        boxShadow: "none",
                                        backgroundColor: "transparent",
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        boxShadow: "none",
                                        borderRadius: "8px",
                                        padding: "8px 0",
                                        backgroundColor: "white",
                                        color:'black'
                                    }),
                                },
                            }}
                        />
                    </div>

          
                    {/* Departure Date & Time */}
                    <div className="flex-1 px-6 relative">
                        <label className="block text-xs text-gray-500 mb-1">Departure</label>
                        <div
    className="text-gray-700 cursor-pointer"
    onClick={() => {
        setShowDepartureCalendar(!showDepartureCalendar);
        setShowArrivalCalendar(false);
    }}
>
    {departureDate
        ? departureDate.toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
          })
        : "Select departure date"}
</div>

                        {showDepartureCalendar && (
                            <div className="absolute z-50 top-12 left-0 bg-white shadow-lg p-2 rounded">
                                <DatePicker
                                    selected={departureDate}
                                    onChange={(date) => {
                                        setDepartureDate(date);
                                        setShowDepartureCalendar(false);
                                    }}
                                    showTimeSelect
                                    dateFormat="yyyy-MM-dd h:mm a"
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    inline
                                />
                            </div>
                        )}
                    </div>

                    {/* Arrival Date & Time */}
                    <div className="flex-1 px-6 relative">
                        <label className="block text-xs text-gray-500 mb-1">Back</label>
                        <div
    className="text-gray-700 cursor-pointer"
    onClick={() => {
        setShowArrivalCalendar(!showArrivalCalendar);
        setShowDepartureCalendar(false);
    }}
>
    {arrivalDate
        ? arrivalDate.toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
          })
        : "Select return date"}
</div>

                        {showArrivalCalendar && (
                            <div className="absolute z-50 top-12 left-0 bg-white shadow-lg p-2 rounded">
                                <DatePicker
                                    selected={arrivalDate}
                                    onChange={(date) => {
                                        setArrivalDate(date);
                                        setShowArrivalCalendar(false);
                                    }}
                                    minDate={departureDate || new Date()} // Prevents selecting a past arrival date
                                    showTimeSelect
                                    dateFormat="yyyy-MM-dd h:mm a"
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    inline
                                />
                            </div>
                        )}
                    </div>

                  
                    <div className="py-2 pl-6">
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
