import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import line from "../../assets/line.png";
import car from "../../assets/car.png";
import callcenter from "../../assets/callcenter.png";
import internet from "../../assets/internet.png";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [loginModal,setLoginModal]=useState(false)

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

    const loginmodal=()=>{
        setLoginModal(!loginModal);
    }


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
                        className="border-b border-0  px-4 py-2 "
                    />
                </div>
            )}
            {loginModal &&
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                {/* Header */}
                <div className="flex justify-between items-center border-b px-4 ">
                  <h2 className="text-2xl ml-24 font-semibold">Login or Register</h2>
                  <button
                    className="text-gray-500 text-lg bg-white border border-0 hover:text-gray-700"
                    onClick={() => setLoginModal(false)}
                  >
                    ✕
                  </button>
                </div>
    
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4">Welcome to Lorepa</h3>
                    <select className="block w-full h-12 mt-1 p-2 border rounded-lg">
                      <option>Canada (+1)</option>
                      <option>United States (+1)</option>
                      <option>United Kingdom (+44)</option>
                      <option>India (+91)</option>
                    </select>
                    <input
                      type="text"
                      className="block w-96 h-8 p-2 border rounded-lg"
                      placeholder="Phone Number"
                    />
                  <button className="w-full h-12 bg-pink-500 text-xl text-white py-2 border  border-0 rounded-lg mb-4 mt-6">
                    Continue
                  </button>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    We’ll call or text you to confirm your number. Message and data
                    rates may apply. <a href="#" className="text-blue-500" onClick={() => {navigate('/privacy'); setLoginModal(false); }}>Privacy Policy</a>
                  </p>
                  <div className="text-center mb-4">or</div>
                  <button className="w-full h-12 border bg-white  text-lg py-2 rounded-lg flex items-center justify-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faGoogle} className="mr-3 text-yellow-500"/>
                    Continue with Google
                  </button>
                  <button className="w-full h-12 bg-white border py-2 text-lg rounded-lg flex items-center justify-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faApple} className="mr-3 " />
                    Continue with Apple
                  </button>
                  <button className="w-full bg-white h-12 border  text-lg py-2 rounded-lg flex items-center justify-center gap-2 mb-2">
                    
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-black-500"/>
                    Continue with Email
                  </button>
                  <button className="w-full bg-white h-12 border  text-lg py-2 rounded-lg flex items-center justify-center gap-2 ">
                    <FontAwesomeIcon icon={faFacebook} className="ml-2 mr-2 text-blue-500"/>
                    Continue with Facebook
                  </button>
                </div>
              </div>
            </div>}


            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* "Devenez hôte" Button and Icons on the right */}
            <div className="flex items-center space-x-4">
                {/* Become a Host Button */}
                <button className="rounded border border-500 bg-white">
                    <a
                        href="#host"
                        className="hidden md:block px-4 py-2 text-black no-underline font-sm"
                        onClick={()=>{navigate('/dashboard')}}
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
                    onClick={loginmodal}
                        href="#host"
                        className="block px-6 py-2 no-underline ml-2 text-black no-underline font-md"
                    >
                        Login
                    </a>
                    <a
                    onClick={loginmodal}
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
                            onClick={()=>{navigate('/becomehost')}}
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
                            onClick={() => navigate("/howLorepaWorks")}
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
