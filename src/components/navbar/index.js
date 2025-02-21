import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import line from "../../assets/line.png";
import car from "../../assets/car.png";
import callcenter from "../../assets/callcenter.png";
import internet from "../../assets/internet.png";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidNumber } from "libphonenumber-js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const location = useLocation();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const[showEmailModal,setEmailModal]=useState(false);


    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowSearchBar(true); // Show search bar when scrolled down
        } else {
            setShowSearchBar(false); // Hide search bar when at the top
        }
    };

    const handlePhoneChange = (value, country) => {
        setPhoneNumber(value);
        setIsValidPhone(isValidNumber(value, country?.dialCode));
    }; 

     // Function to handle email login
     const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User Logged In:", userCredential.user);
            setEmailModal(false); // Close modal on success
        } catch (error) {
            console.error("Error logging in:", error);
            setError("Invalid email or password");
        }
    };

    // Function to handle email registration
    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User Registered:", userCredential.user);
            setEmailModal(false);
        } catch (error) {
            console.error("Error registering:", error);
            setError(error.message);
        }
    };

    const sendOtp = async () => {
        try {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                size: "invisible",
                callback: () => {
                    console.log("Recaptcha verified");
                },
            });

            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
            setConfirmationResult(confirmation);
            alert("OTP Sent!");
        } catch (error) {
            console.error("Error sending OTP:", error);
        }
    };

    const verifyOtp = async () => {
        try {
            await confirmationResult.confirm(otp);
            alert("Phone number verified successfully!");
            setLoginModal(false);
        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert("Invalid OTP");
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

    const loginmodal = () => {
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
            {showSearchBar && location.pathname !== "/" && (
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
                            <div>
                <PhoneInput
                    country={"us"} // Default country
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    inputStyle={{ width: "100%", padding: "10px", fontSize: "16px" }}
                    enableSearch
                />
                {!isValidPhone && (
                    <p style={{ color: "red", fontSize: "14px" }}>Invalid phone number</p>
                )}
                <button onClick={sendOtp} className="w-full bg-blue-500 text-white py-2 mt-2 rounded">
                    Send OTP
                </button>
            </div>
            {confirmationResult && (
                <div>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="border rounded p-2 w-full mt-4"
                        placeholder="Enter OTP"
                    />
                    <button onClick={verifyOtp} className="w-full bg-green-500 text-white py-2 mt-2 rounded">
                        Verify OTP
                    </button>
                </div>
            )}

                        <div id="recaptcha-container"></div>
                            <p className="text-sm text-gray-500 text-center mb-4">
                                We’ll call or text you to confirm your number. Message and data
                                rates may apply. <a href="#" className="text-blue-500" onClick={() => { navigate('/privacy'); setLoginModal(false); }}>Privacy Policy</a>
                            </p>
                            <div className="text-center mb-4">or</div>
                            <GoogleLogin
    onSuccess={async (response) => {
        const userInfo = jwt_decode(response.credential);
        console.log("Google User Info:", userInfo);

        const userPayload = {
            name: userInfo.name,
            email: userInfo.email,
            address: "123 Main Market Lahore", // You can allow users to edit this later
            phone: "", // Leave empty for now, unless you capture it separately
            password: "", // Password is not required for OAuth users
            role: "owner", // Default role, change as needed
            google_id: userInfo.sub, // Store Google ID for future authentication
        };

        try {
            const response = await fetch("http://your-backend-url.com/api/register-google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userPayload),
            });

            const data = await response.json();
            console.log("Backend Response:", data);

            if (data.success) {
                setLoginModal(false); // Close modal on success
                localStorage.setItem("token", data.token); // Store token for session management
            }
        } catch (error) {
            console.error("Error sending data to backend:", error);
        }
    }}
    onError={() => {
        console.log("Login Failed");
    }}
/>



                            <button className="w-full h-12 bg-white border py-2 text-lg rounded-lg flex items-center justify-center gap-2 mb-2">
                                <FontAwesomeIcon icon={faApple} className="mr-3 " />
                                Continue with Apple
                            </button>
                            <button onClick={() => setEmailModal(true)}  className="w-full bg-white h-12 border  text-lg py-2 rounded-lg flex items-center justify-center gap-2 mb-2">

                                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-black-500" />
                                Continue with Email
                            </button>
                            {showEmailModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            {isRegistering ? "Register" : "Login"}
                        </h2>

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="border p-2 w-full mb-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Password Input */}
                        <input
                            type="password"
                            placeholder="Password"
                            className="border p-2 w-full mb-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        {/* Login/Register Button */}
                        <button
                            onClick={isRegistering ? handleRegister : handleLogin}
                            className="w-full bg-blue-500 text-white py-2 rounded mt-2"
                        >
                            {isRegistering ? "Register" : "Login"}
                        </button>

                        {/* Toggle between Login and Register */}
                        <p
                            className="text-sm text-blue-500 text-center mt-2 cursor-pointer"
                            onClick={() => setIsRegistering(!isRegistering)}
                        >
                            {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
                        </p>

                        <button className="text-gray-500 mt-4" onClick={() => setLoginModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
                            <button className="w-full bg-white h-12 border  text-lg py-2 rounded-lg flex items-center justify-center gap-2 ">
                                <FontAwesomeIcon icon={faFacebook} className="ml-2 mr-2 text-blue-500" />
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
                        onClick={() => { navigate('/dashboard') }}
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
                        onClick={() => {
                            loginmodal();
                            setIsOpen(false);
                        }}
                        href="#host"
                        className="block px-6 py-2 no-underline ml-2 text-black no-underline font-md"
                    >
                        Login
                    </a>
                    <a
                        onClick={() => {
                            loginmodal();
                            setIsOpen(false);
                        }}
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
                            onClick={() => { navigate('/becomehost'); setIsOpen(false) }}
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
                            onClick={() => { navigate("/howLorepaWorks"); setIsOpen(false) }}
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
