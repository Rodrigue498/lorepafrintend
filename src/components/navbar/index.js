import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import line from "../../assets/line.png";
import car from "../../assets/car.png";
import callcenter from "../../assets/callcenter.png";
import internet from "../../assets/internet.png";
import ChangePassword from "../admin/password";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
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
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
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
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const[role,setRole]=useState(false);
    const[usermodal,setUserModal]=useState(false);
    const[date,setDatedropdown]=useState(true);
      const [departureDate, setDepartureDate] = useState(null);
      const [arrivalDate, setArrivalDate] = useState(null);
      const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
      const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
        const [place, setPlace] = useState(null);
          const [mapSrc, setMapSrc] = useState(
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.953735315321!3d-37.81627974201252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc9dc9ab%3A0x5045675218ce720!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1613951976613!5m2!1sen!2sus"
          );

    useEffect(() => {
      // Retrieve user from localStorage when the component mounts
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    const handleChangePassword = () => {
      navigate("/changePassword", { state: { user } });
  };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowSearchBar(true); // Show search bar when scrolled down
        } else {
            setShowSearchBar(false); // Hide search bar when at the top
        }
    };

    // const handlePhoneChange = (value, country) => {
    //     setPhoneNumber(value);
    //     setIsValidPhone(isValidNumber(value, country?.dialCode));
    // }; 
    const API_URL = process.env.REACT_APP_API_URL;

    const handleRegister = async () => {
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
    
      try {
        const response = await fetch(`${API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            password,
            password_confirmation: confirmPassword,
            role,
          }),
        });
    
        const text = await response.text();
        const data = text ? JSON.parse(text) : {}; // Check for empty response
    
        console.log("Register Response:", data);
    
        if (!response.ok) {
          setError(data.message || "Registration failed.");
          return;
        }
    
        if (!data.token) {
          throw new Error("Token missing from response");
        }
    
        localStorage.setItem("token", data.access_token);
        console.log("Stored Token:", localStorage.getItem("token"));
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPassword("");
        setConfirmPassword("");
        setError("");
        setEmailModal(false);
        alert("Registered Successfuly!")
      } catch (err) {
        console.error("Error:", err);
        setError("Something went wrong. Please try again.");
      }
    };
    
    
    const handleLogin = async () => {
      console.log("Login button clicked");
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        
        const text = await response.text();
        console.log("Raw Response Text:", text);
        
        const data = text ? JSON.parse(text) : {}; // Prevent JSON parsing error
        console.log("Parsed Response:", data);
        // Prevent JSON parsing error
    
        console.log("Login Response:", data);
    
        if (!response.ok) {
          setError(data.message || "Login failed.");
          return;
        }
    
        if (!data.access_token) {
          throw new Error("Token missing from response");
        }
        
        localStorage.setItem("token", data.access_token);
        console.log("Stored Token:", localStorage.getItem("token"));
        localStorage.setItem("user", JSON.stringify(data.user || {}));
        setUser(data.user || {});
        setEmailModal(false);
        setPassword("");
        setEmail("");
        alert("Login successfully! ")
        setError(""); // Clear any previous errors
      } catch (err) {
        console.error("Error:", err.message);
        setError("Invalid email or password.");
      }
    };
    
    
    

    // Function to handle email registration
    
    // useEffect(() => {
    //   const storedUser = localStorage.getItem("user");
    //   if (storedUser) {
    //     setUser(JSON.parse(storedUser));
    //   }
    // }, []);
    const handlePlaceSelect = (selectedPlace) => {
      setPlace(selectedPlace);
      if (selectedPlace?.value?.place_id) {
        const placeId = selectedPlace.value.place_id;
  
        // Update Google Maps iframe URL dynamically
        setMapSrc(
          `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=place_id:${placeId}`
        );
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
            <a href="/" onClick={(e) => e.preventDefault()}>
    <img src={logo} alt="RVez Logo" className="h-30 w-40" />
</a>


            {/* Search Bar */}
            {showSearchBar && location.pathname !== "/" && location.pathname !== "/categories" && (
                <div className="flex items-center border-b border-gray-800 ml-8 flex-grow max-w-md ">
                    <FaSearch className="text-gray-500 ml-3" />
                    <input
                        type="text"
                        placeholder="City, airport, address or hotel"
                        className="border-b border-0  px-4 py-2 "
                    />
                </div>
            )}
{date && location.pathname === "/categories" && (<div className="flex flex-wrap w-full gap-4"> <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_API_KEYS}
        selectProps={{
          value: place,
          onChange: handlePlaceSelect,
          placeholder: "City, airport, address or hotel",
          styles: {
            control: (provided) => ({
              ...provided,
              borderRadius: "8px",
              padding: "12px",
              fontSize: "16px",
              border: "0",
              boxShadow: "none",
              backgroundColor: "transparent",
              minWidth: "300px",
            }),
            menu: (provided) => ({
              ...provided,
              boxShadow: "none",
              borderRadius: "8px",
              padding: "12px 0",
              backgroundColor: "white",
              color: "black",
              minWidth: "300px",
            }),
          },
        }}
      />

        
        <div className="flex ">

          <div className="flex-1  ">
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
              <div className="absolute z-50 top-12 left-0 bg-white shadow-lg p-4 rounded w-[340px]">
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
              <div className="absolute z-50 top-12 left-0 bg-white shadow-lg p-4 rounded w-[340px]">
                <DatePicker
                  selected={arrivalDate}
                  onChange={(date) => {
                    setArrivalDate(date);
                    setShowArrivalCalendar(false);
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



        </div>
        <div className="py-2 md:w-auto text-center md:text-left">
            <button className=" md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:outline-none">
                Search
            </button>
        </div></div>)}

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
        <h3 className="text-2xl font-medium mb-4 text-center">Welcome to Lorepa</h3>

        

        <GoogleLogin
  onSuccess={async (response) => {
    const userInfo = jwtDecode(response.credential);
    console.log("Google User Info:", userInfo);

    const userPayload = {
      name: userInfo.given_name,
      email: userInfo.email,
      google_id: userInfo.sub
    };

    try {
      const res = await fetch(`${API_URL}/register-google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userPayload),
      });

      const data = await res.json();
      console.log("Backend Response:", data);

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setLoginModal(false);
      } else {
        console.error("Error:", data.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error sending data to backend:", error.message);
    }
  }}
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

      {/* Register: Name Input */}
      {isRegistering && (
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Register: Phone Input */}
      {isRegistering && (
        <input
          type="tel"
          placeholder="Phone"
          className="border p-2 w-full mb-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      )}

      {/* Register: Address Input */}
      {isRegistering && (
        <input
          type="text"
          placeholder="Address"
          className="border p-2 w-full mb-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      )}

      {/* 🔥 Role Dropdown */}
      {isRegistering && (
        <select
          className="border p-2 w-full mb-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="owner">Owner</option>
          <option value="renter">Renter</option>
          <option value="administrator">Administrator</option>
        </select>
      )}

      {/* Password Input */}
      <div className="relative mb-2">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      {/* Confirm Password Input (only for Register) */}
      {isRegistering && (
        <div className="relative mb-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="border p-2 w-full mb-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Register/Login Button */}
      <button
        onClick={isRegistering ? handleRegister : handleLogin}
        className="w-full bg-blue-500 text-white py-3 rounded-lg mt-2"
      >
        {isRegistering ? "Register" : "Login"}
      </button>

      {/* Toggle Login/Register */}
      <p
        className="text-sm text-blue-500 text-center mt-2 cursor-pointer"
        onClick={() => setIsRegistering(!isRegistering)}
      >
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

                {user ? (
  <div className="flex items-center space-x-4" onClick={() => setUserModal(!usermodal)}>
    <span className="text-black font-semibold">{user.name}</span>
    {usermodal && (
      <div className="absolute right-0 mr-64 mt-64 w-48 bg-white shadow-lg rounded-md p-2 z-10">
        <button
          className="flex items-center w-full px-4 py-2 text-black hover:bg-gray-100"
          onClick={() => navigate("/dashboard", { state: user })}
        >
          🛠️ My profile
        </button>
        <button
          className="flex items-center w-full px-4 py-2 text-black hover:bg-gray-100"
          onClick={() => navigate("/messages")}
        >
          💬 Messages
        </button>
        <button
          className="flex items-center w-full px-4 py-2 text-black hover:bg-gray-100"
          onClick={() => navigate("/booking-history")}
        >
          ⏳ Booking History
        </button>
        <button
          className="flex items-center w-full px-4 py-2 text-black hover:bg-gray-100"
          onClick={handleChangePassword}

        >
          🔒 Change password
        </button>
        <button
          className="flex items-center w-full px-4 py-2 text-red-500 hover:bg-gray-100"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUser(null); // Update state to reflect logout
          }}
        >
          🚪 Logout
        </button>
      </div>
    )}
  </div>
) : (
  <button className="rounded border border-500 bg-white">
    <a
      href="#host"
      className="hidden md:block px-4 py-2 text-black no-underline font-sm"
      onClick={() => navigate('/dashboard')}
    >
      Become a host
    </a>
  </button>
)}



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
