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
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidNumber } from "libphonenumber-js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { FaTrailer } from "react-icons/fa";

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
            {loginModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl">
      {/* Header */}
      <div className="flex justify-between items-center border-b px-4 py-3">
        <h2 className="text-2xl font-semibold text-center w-full">Login or Register</h2>
        <button
          className="text-gray-500 text-lg hover:text-gray-700"
          onClick={() => setLoginModal(false)}
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium mb-4 text-center">Welcome to Lorepa</h3>
        
        {/* Phone Number Input */}
        <div>
          <PhoneInput
            country={"us"}
            value={phoneNumber}
            onChange={handlePhoneChange}
            inputStyle={{ width: "100%", padding: "10px", fontSize: "16px" }}
            enableSearch
          />
          {!isValidPhone && (
            <p className="text-red-500 text-sm">Invalid phone number</p>
          )}
          <button onClick={sendOtp} className="w-full bg-blue-500 text-white py-3 mt-2 rounded-lg">
            Send OTP
          </button>
        </div>

        {/* OTP Verification */}
        {confirmationResult && (
          <div>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border rounded p-2 w-full mt-4"
              placeholder="Enter OTP"
            />
            <button onClick={verifyOtp} className="w-full bg-green-500 text-white py-3 mt-2 rounded-lg">
              Verify OTP
            </button>
          </div>
        )}

        <div id="recaptcha-container"></div>

        {/* Privacy Policy */}
        <p className="text-sm text-gray-500 text-center mt-4">
          We’ll call or text you to confirm your number. Message and data rates may apply. 
          <a href="#" className="text-blue-500" onClick={() => { navigate('/privacy'); setLoginModal(false); }}>
            Privacy Policy
          </a>
        </p>

        <div className="text-center my-4">or</div>

        {/* Google Login */}
        <GoogleLogin
          onSuccess={async (response) => {
            const userInfo = jwtDecode(response.credential);
            console.log("Google User Info:", userInfo);

            const userPayload = {
              name: userInfo.name,
              email: userInfo.email,
              address: "123 Main Market Lahore",
              phone: "",
              password: "",
              role: "owner",
              google_id: userInfo.sub,
            };

            try {
              const res = await fetch("http://your-backend-url.com/api/register-google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userPayload),
              });

              const data = await res.json();
              console.log("Backend Response:", data);

              if (data.success) {
                setLoginModal(false);
                localStorage.setItem("token", data.token);
              }
            } catch (error) {
              console.error("Error sending data to backend:", error);
            }
          }}
          onError={() => console.log("Login Failed")}
          style={{ width: "250px", height: "50px", fontSize: "16px", borderRadius: "8px" }}
        />

        {/* Social Login Buttons */}
        <button className="w-full bg-white border py-3 text-lg rounded-lg flex items-center justify-center gap-2 mt-2">
          <FontAwesomeIcon icon={faApple} className="mr-2" />
          Continue with Apple
        </button>

        <button onClick={() => setEmailModal(true)} className="w-full bg-white border py-3 text-lg rounded-lg flex items-center justify-center gap-2 mt-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-black-500" />
          Continue with Email
        </button>

        {showEmailModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                {isRegistering ? "Register" : "Login"}
              </h2>

              {/* Email & Password Inputs */}
              <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

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
                className="w-full bg-blue-500 text-white py-3 rounded-lg mt-2"
              >
                {isRegistering ? "Register" : "Login"}
              </button>

              {/* Toggle between Login and Register */}
              <p className="text-sm text-blue-500 text-center mt-2 cursor-pointer" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
              </p>

              <button className="text-gray-500 mt-4 w-1/3 text-center" onClick={() => setEmailModal(false)}>
                Close
              </button>
            </div>
          </div>
        )}

        <button className="w-full bg-white border py-3 text-lg rounded-lg flex items-center justify-center gap-2 mt-2">
          <FontAwesomeIcon icon={faFacebook} className="ml-2 mr-2 text-blue-500" />
          Continue with Facebook
        </button>
      </div>
    </div>
  </div>
)}



            {/* Spacer */}
            <div className="md:flex-grow"></div>

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
                <img
                        src={internet}
                        alt="Internet Icon"
                        className="h-10 w-10"
                    />
                <div className="flex items-center" onClick={toggleMenu}>
                  
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
  <div className="fixed top-16 right-4 md:right-0 mx-auto bg-white shadow-lg w-full sm:w-64 md:w-1/6 py-4 rounded-lg border border-gray-200">
    <a
      onClick={() => {
        loginmodal();
        setIsOpen(false);
      }}
      className="block px-6 py-2 text-black font-md cursor-pointer hover:bg-gray-100"
    >
      Login
    </a>
    <a
      onClick={() => {
        loginmodal();
        setIsOpen(false);
      }}
      className="block px-6 py-2 text-black font-md cursor-pointer hover:bg-gray-100"
    >
      Registration
    </a>
    <div className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
      <FaTrailer className="h-6 w-6" />
      <span
        className="ml-2 text-black font-md"
        onClick={() => {
          navigate("/becomehost");
          setIsOpen(false);
        }}
      >
        Become a Host
      </span>
    </div>
    <div className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
      <img src={callcenter} alt="Call Center Icon" className="h-6 w-6" />
      <span
        className="ml-2 text-black font-md"
        onClick={() => {
          navigate("/howLorepaWorks");
          setIsOpen(false);
        }}
      >
        How Lorepa Works
      </span>
    </div>
    <div className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
      <img src={contact} alt="Contact Icon" className="h-6 w-6" />
      <span className="ml-2 text-black font-md">Contact Customer Service</span>
    </div>
  </div>
)}

        </nav>
    );
};

export default Navbar;
