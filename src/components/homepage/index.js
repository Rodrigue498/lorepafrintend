import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
    const [departureDate, setDepartureDate] = useState(null);
    const [arrivalDate, setArrivalDate] = useState(null);
    const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
    const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
    const [place, setPlace] = useState(null);

const handleSearch = (navigate) => {
    if (!place || !departureDate || !arrivalDate) {
        alert("Please select all fields before searching.");
        return;
    }

    const queryParams = new URLSearchParams({
        place: place.label,
        departure: departureDate.toISOString(),
        arrival: arrivalDate.toISOString(),
    }).toString();

    navigate(`/categories?${queryParams}`);
};
    


    return (
        <div className="bg-cover bg-center h-screen bg-no-repeat bg-opacity-50 flex flex-col items-center text-white"
            style={{ backgroundImage: `url(${require("../../assets/main.png")})` }}
        >
            <div className="md:text-5xl font-extrabold tracking-wide mt-20">Find Your Ideal Trailer</div>
            <h5 className="text-lg mt-2 mb-8">
                Discover the best trailers and motorhomes for your RV adventure
            </h5>

            <div className="bg-white shadow-lg md:w-[1200px] mx-auto p-3 md:p-3 rounded-2xl">
    {/* Tabs Section */}
    <div className="relative text-black text-2xl font-bold shadow-lg justify-center items-center flex flex-wrap h-auto text-md rounded-lg p-2">
        Search All Trailer
    </div>

    {/* Search Bar */}
    <div className="flex flex-col md:flex-row items-center md:items-center mt-4 bg-gray-100 rounded-2xl shadow-md gap-4">
        {/* Place Search */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-300 w-full md:w-auto">
            <label className="block text-xs text-gray-500 mt-2 ml-2">Place</label>
            <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_API_KEYS}
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
                            color: "black",
                        }),
                    },
                }}
            />
        </div>

        {/* Departure Date */}
        <div className="flex-1 px-2 md:px-6 relative w-full md:w-auto">
            <label className="block text-xs text-gray-500 mb-1">Departure</label>
            <div
                className="text-gray-700 cursor-pointer px-3 py-4 rounded-lg shadow-sm"
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
                <div className="absolute z-50 top-16 left-0 shadow-lg p-2 md:w-96 rounded">
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

        {/* Arrival Date */}
        <div className="flex-1 px-2 md:px-6 relative w-full md:w-auto">
            <label className="block text-xs text-gray-500 mb-1">Back</label>
            <div
                className="text-gray-700 cursor-pointer px-3 py-2 rounded-lg shadow-sm"
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
                <div className="absolute z-50 top-16 left-0 bg-white shadow-lg p-2 md:w-[330px] rounded">
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

        {/* Search Button */}
        <div className="py-2 w-full md:w-auto text-center md:text-left">
            <button onClick={() => handleSearch(navigate)} className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none">
                Search
            </button>
        </div>
    </div>
</div>

        </div>
    );
};

export default HomePage;
