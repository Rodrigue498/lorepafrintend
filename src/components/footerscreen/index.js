import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const FooterScreen = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="no-undeline text-red-500 hover:underline" onClick={() => navigate('/')}>Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-black" onClick={() => navigate('/howLorepaWorks')}>About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-black" onClick={() => navigate('/becomehost')}>Estimate Your Rental Income</a>
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
          <p className="mb-4">Sign up for the latest updates and discounts.</p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 border border-gray-300 rounded-l px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0"
            />
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 sm:ml-2 w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Assurance */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
        <div>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="https://www.facebook.com/people/Lorepa/61561996935366/?rdid=tc2u75lBVFJSYP34&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DXG7aEt1A%2F" className="text-blue-600 hover:text-black"><i className="fab fa-2x fa-facebook"></i></a>
            <a href="https://www.instagram.com/lorepa.ca/?igsh=amgxNXI5b2Z2eTFr#" className="text-pink-600 hover:text-black"><i className="fab fa-2x fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@lorepa.ca?_t=ZN-8vGH2EYxivG&_r=1" className="text-black hover:text-black"><i className="fab fa-2x fa-tiktok"></i></a>
                      </div>
          <p className="text-gray-500 max-w-md mx-auto md:mx-0">
            Our platform is proudly insured by Intact Assurance, a leader in security and insurance.
          </p>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
        <p className="text-black">&copy; 2024 Lorepa. All rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline text-gray-500" onClick={() => navigate('/termofuse')}>Terms of Use</a>
          <a href="#" className="hover:underline text-gray-500">Legal Mentions</a>
          <a href="#" className="hover:underline text-gray-500" onClick={() => navigate('/privacy')}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
