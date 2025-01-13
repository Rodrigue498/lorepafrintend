import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import line from "../../assets/line.png";
import car from "../../assets/car.png";
import callcenter from "../../assets/callcenter.png";
import internet from "../../assets/internet.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowSearchBar(true); // Show search bar when scrolled down
        } else {
            setShowSearchBar(false); // Hide search bar when at the top
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed flex bg-white shadow-md w-full z-50 items-center h-16">
            {/* Logo on the left */}
            <a href="/">
                <img
                    src={logo}
                    alt="RVez Logo"
                    className="h-30 w-40"
                />
            </a>

            {/* Search Bar */}
            {showSearchBar && (
                <div className="flex items-center border-b border-gray-800 ml-8 flex-grow max-w-md ">
                    <FaSearch className="text-gray-500 ml-3" />
                    <input
                        type="text"
                        placeholder="City, airport, address or hotel"
                        className="w-full px-4 py-2 outline-none focus:border-none"
                    />
                </div>
            )}


            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* "Devenez hôte" Button and Icons on the right */}
            <div className="flex items-center space-x-4">
                {/* Become a Host Button */}
                <button className="rounded border border-500 bg-white">
                    <a
                        href="#host"
                        className="hidden md:block px-4 py-2 text-black no-underline font-sm"
                    >
                        Become a host
                    </a>
                </button>
                {/* User Icons */}
                <div className="flex items-center" onClick={toggleMenu}>
                    <img
                        src={internet}
                        alt="Internet Icon"
                        className="h-10 w-10"
                    />
                    <img
                        src={line}
                        alt="Line Icon"
                        className="h-8 w-8"
                    />
                    <img
                        src={contact}
                        alt="Contact Icon"
                        className="h-8 w-8"
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed absolute top-16 right-0 ml-4 bg-white shadow-lg w-1/6 py-4 m-2 rounded border border-200">
                    <a
                        href="#host"
                        className="block px-6 py-2 no-underline ml-2 text-black no-underline font-md"
                    >
                        Login
                    </a>
                    <a
                        href="#host"
                        className="block px-6 py-2 no-underline ml-2 text-black no-underline font-md"
                    >
                        Registration
                    </a>
                    <div className="flex items-center px-6 text-gray-700 hover:bg-gray-100">
                        <img
                            src={car}
                            alt="Car Icon"
                            className="h-8 w-8"
                        />
                        <a
                            href="#host"
                            className="ml-2 text-black no-underline font-md"
                        >
                            Become a host
                        </a>
                    </div>
                    <div className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
                        <img
                            src={callcenter}
                            alt="Call Center Icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="#host"
                            className="ml-2 text-black no-underline font-md"
                        >
                            How Lorepa Works
                        </a>
                    </div>
                    <div className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100">
                        <img
                            src={contact}
                            alt="Contact Icon"
                            className="h-6 w-6"
                        />
                        <a
                            href="#host"
                            className="ml-2 text-black no-underline font-md"
                        >
                            Contact Customer Service
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
