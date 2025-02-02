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
import { faGoogle, faApple, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


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
    image:ford,
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


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const loginmodal = () => {
    setLoginModal(!loginModal);
  }

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
    const filtered = carsData.filter((car) =>
      car.name.toLowerCase().includes(value)
    );
    setFilteredCars(filtered);
  };

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
                  rates may apply. <a href="#" className="text-blue-500" onClick={() => { navigate('/privacy'); setLoginModal(false); }}>Privacy Policy</a>
                </p>
                <div className="text-center mb-4">or</div>
                <button className="w-full h-12 border bg-white  text-lg py-2 rounded-lg flex items-center justify-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faGoogle} className="mr-3 text-yellow-500" />
                  Continue with Google
                </button>
                <button className="w-full h-12 bg-white border py-2 text-lg rounded-lg flex items-center justify-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faApple} className="mr-3 " />
                  Continue with Apple
                </button>
                <button className="w-full bg-white h-12 border  text-lg py-2 rounded-lg flex items-center justify-center gap-2 mb-2">

                  <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-black-500" />
                  Continue with Email
                </button>
                <button className="w-full bg-white h-12 border  text-lg py-2 rounded-lg flex items-center justify-center gap-2 ">
                  <FontAwesomeIcon icon={faFacebook} className="ml-2 mr-2 text-blue-500" />
                  Continue with Facebook
                </button>
              </div>
            </div>
          </div>}
        <div>
        <input
          type="text"
          placeholder="Ville, aéroport, adresse ou hôtel"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full border-b border-0 focus:border-white focus:outline-none pb-2 text-lg"
        />
        
        </div>
        <div className="flex items-center space-x-4">
          {/* Departure Date */}
          <div>
            <input placeholder="Departure Date" className="ml-12 w-36 border-b border-0 focus:border-white focus:outline-none pb-2 text-lg"/>
            <input placeholder="Time" className=" w-24 border-b border-0 focus:border-white focus:outline-none pb-2 text-lg"/>
          </div>

          {/* Return Date */}
          <div>
          <input placeholder="Arrival Date" className="ml-12 w-36 border-b border-0 focus:border-white focus:outline-none pb-2 text-lg"/>
          <input placeholder="Arrival Date" className=" w-24 border-b border-0 focus:border-white focus:outline-none pb-2 text-lg"/>
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
