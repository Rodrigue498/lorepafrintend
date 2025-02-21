import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import ford from '../../assets/ford.jpg'
import rv from '../../assets/rv4.jpeg'
import civic from '../../assets/civic.jpeg'
import fortwo from '../../assets/fortwo.jpg'
import line from "../../assets/line.png";
import car from "../../assets/car.png";
import callcenter from "../../assets/callcenter.png";
import internet from "../../assets/internet.png";
import { Filter, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";
import {faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidNumber } from "libphonenumber-js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";





const carsData = [
  {
    id: 1,
    name: "Toyota RAV4 2015",
    price: 144,
    location: "Montreal",
    rating: 5.0,
    reviews: 15,
    image: rv,
  },
  {
    id: 2,
    name: "Ford Focus 2016",
    price: 154,
    location: "Montreal",
    rating: 4.98,
    reviews: 221,
    image: ford,
  },
  {
    id: 3,
    name: "Honda Civic 2025",
    price: 177,
    location: "Montreal",
    rating: 5.0,
    reviews: 9,
    image: civic,
  },
  {
    id: 4,
    name: "Smart EQ Fortwo 2019",
    price: 190,
    location: "Montreal",
    rating: 5.0,
    reviews: 23,
    image: fortwo,
  },
];

const CarRental = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showArrivalCalendar, setShowArrivalCalendar] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
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

  const suggestions = [
    { category: "Position actuelle", icon: "📍", description: "Votre position actuelle" },
    { category: "N'importe où", icon: "🌐", description: "Parcourir toutes les voitures" },
    {
      category: "Historique",
      options: [
        { name: "Lahore, Punjab", icon: "🕒" },
      ],
    },
    {
      category: "Villes",
      options: [
        { name: "Toronto", icon: "🏙️" },
        { name: "Montréal", icon: "🏙️" },
      ],
    },
    {
      category: "Aéroports",
      options: [
        { name: "YYZ – Aéroport international Pearson de Toronto", icon: "✈️" },
      ],
    },
  ];

  const handleFocus = () => setShowDropdown(true);
  const handleBlur = () => setTimeout(() => setShowDropdown(false), 200); // Delay to prevent immediate closing
  const [place, setPlace] = useState(null);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
    const filtered = carsData.filter((car) =>
      car.name.toLowerCase().includes(value)
    );
    setFilteredCars(filtered);
  };
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
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed flex bg-white shadow-md w-full z-50 items-center h-16">
        {/* Logo on the left */}
        <a href="/">
          <img
            src={logo}
            alt="RVez Logo"
            className="h-30 w-40"
          />
        </a>
        {showDropdown &&
          <div className="absolute top-full ml-[150px] bg-white shadow-lg rounded-lg z-10 p-4">
            {suggestions.map((section, index) => (
              <div key={index} className="">
                <p className="text-sm font-semibold text-gray-500">{section.category}</p>
                {section.options ? (
                  section.options.map((option, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer rounded"
                      onClick={() => setQuery(option.name)}
                    >
                      <span className="text-xl">{option.icon}</span>
                      <span>{option.name}</span>
                    </div>
                  ))
                ) : (
                  <div
                    className="flex items-center gap-3  hover:bg-gray-100 cursor-pointer rounded"
                    onClick={() => setQuery(section.description)}
                  >
                    <span className="text-xl">{section.icon}</span>
                    <div>
                      <p className="font-medium">{section.category}</p>
                      <p className="text-sm text-gray-500">{section.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <p className="text-xs text-center text-gray-500 ">
              powered by <span className="text-blue-500">Google</span>
            </p>
          </div>
        }


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
      const userInfo = jwtDecode(response.credential);
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
        <div>
          <GooglePlacesAutocomplete
            apiKey= {process.env.API_KEY}
            selectProps={{
              value: place,
              onChange: setPlace,
              placeholder: "City, airport, address or hotel",
              styles: {
                control: (provided) => ({
                  ...provided,
                  borderRadius: "8px",
                  padding: "12px", // Increased padding
                  fontSize: "16px", // Increased font size
                  border: "0",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  minWidth: "300px", // Increased width
                }),
                menu: (provided) => ({
                  ...provided,
                  boxShadow: "none",
                  borderRadius: "8px",
                  padding: "12px 0",
                  backgroundColor: "white",
                  color: "black",
                  minWidth: "300px", // Increased width
                }),
              },
            }}
          />


        </div>
        <div className="flex items-center space-x-4">

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

        <div className="flex-grow"></div>
        {/* "Devenez hôte" Button and Icons on the right */}
        <div className="flex items-center space-x-4">

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
      <div className="pt-24 flex items-center space-x-2 p-4 border border-gray-300 rounded-lg bg-white">
        {/* Filter Icon */}
        <button className="flex items-center px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          <Filter size={20} />
        </button>

        {/* Filters */}
        <button className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          Price per day <ChevronDown size={16} className="inline-block ml-1" />
        </button>

        <button className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          Vehicle type <ChevronDown size={16} className="inline-block ml-1" />
        </button>

        <button className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          Brand <ChevronDown size={16} className="inline-block ml-1" />
        </button>

        <button className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          Year
        </button>

        <button className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          Seats
        </button>

        <button className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          Electric
        </button>

        <button className="px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          Deliver the car <ChevronDown size={16} className="inline-block ml-1" />
        </button>

        {/* All Filters Button */}
        <button className="flex items-center px-3 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-100">
          <Filter size={20} />
          <span className="ml-2">All filters</span>
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div>


      {/* Main Content */}
      <main className="mt-6 mx-auto grid grid-cols-2 gap-0 h-screen">
        {/* Car List (Occupying less width) */}
        <section className="bg-white p-4 rounded-lg shadow-md overflow-auto">
          <h2 className="text-xl font-bold mb-4">Available Cars</h2>
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 mb-4"
            >
              {/* Reduce Image Size */}
              <img
                src={car.image}
                alt={car.name}
                className="w-64 h-64 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-2xl">{car.name}</h3>
                <p className="text-gray-500 text-xl">{car.location}</p>
                <p className="text-green-500 font-bold text-xl">${car.price} total</p>
                <p className="text-sm text-gray-400  text-xl">{car.rating}★ ({car.reviews} reviews)</p>
              </div>
            </div>
          ))}
        </section>

        {/* Map Section (Taking half of the screen) */}
        <section className="h-screen">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>

    </div>
  );
};

export default CarRental;
