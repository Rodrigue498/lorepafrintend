import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";


const FooterScreen = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 list-none">
            <li>
              <a href="#" className="text-red-500 hover:underline no-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline no-underline text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline no-underline text-black">
                Estimate Your Rental Income
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <p>contact@lorepa.ca</p>
          <p>3910 Rue de Bellechasse</p>
          <p>Montreal, Quebec, H1X 1J4</p>
          <p>Canada</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
          <p className="mb-4">
            Sign up for our newsletter to receive the latest updates, exclusive discounts, and more.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            />
            <button className="ml-4 w-1/2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Social Media and Assurance */}
        <div className="flex flex-col items-center  text-center md:text-left ml-96">
          <div className="flex space-x-8 mb-4 ml-36 ">
            <a href="#" className="text-blue-600 hover:text-black">
              <i className="fab fa-2x fa-facebook"></i>
            </a>
            <a href="#" className="text-pink-600 hover:text-black">
              <i className="fab fa-2x  fa-instagram"></i>
            </a>
            <a href="#" className="text-black hover:text-black">
              <i className="fab fa-2x  fa-tiktok"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-black ">
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
          </div>
          <p className="text-gray-500 ml-36 w-72 ">
            Our platform is proudly insured by Intact Assurance, a leader in security and insurance.
          </p>

        </div>
        </div>
        {/* Copyright and Links */}
        <div className="flex flex-row  text-center text-gray-500  ml-96">
        <p className="text-lg text-black-800 mr-72">&copy; 2024 Lorepa. All rights reserved.</p>

          <div className="space-x-4 ml-96 mt-4 ">
            <a href="#" className="hover:underline no-underline text-gray-500" onClick={()=>navigate('/termofuse')}>
              Terms of Use
            </a>
            <a href="#" className="hover:underline no-underline text-gray-500">
              Legal Mentions
            </a>
            <a href="#" className="hover:underline no-underline text-gray-500" onClick={()=>navigate('/privacy')}>
              Privacy Policy
            </a>
            
          </div>
          
        </div>
      
    </footer>
  );
};

export default FooterScreen;
