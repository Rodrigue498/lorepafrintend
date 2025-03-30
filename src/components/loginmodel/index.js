import React, { useState } from "react";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to Open Modal */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Login Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            {/* Header */}
            <div className="flex justify-between items-center border-b px-4 py-3">
              <h2 className="text-lg font-semibold">Sign In or Register</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-medium mb-4">Welcome to Airbnb</h3>
              <label className="block mb-2">
                <span className="text-gray-700">Country/Region</span>
                <select className="block w-full mt-1 p-2 border rounded">
                  <option>Canada (+1)</option>
                  <option>United States (+1)</option>
                  <option>United Kingdom (+44)</option>
                  <option>India (+91)</option>
                </select>
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Phone Number</span>
                <input
                  type="text"
                  className="block w-full mt-1 p-2 border rounded"
                  placeholder="Enter your phone number"
                />
              </label>
              <button className="w-full bg-pink-500 text-white py-2 rounded mb-4">
                Continue
              </button>
              <p className="text-sm text-gray-500 text-center mb-4">
                We’ll call or text you to confirm your number. Message and data
                rates may apply. <a href="#" className="text-blue-500">Privacy Policy</a>
              </p>
              <div className="text-center mb-4">or</div>
              <button className="w-full border py-2 rounded flex items-center justify-center gap-2 mb-2">
                <img src="google-logo.png" alt="Google" className="w-5" />
                Continue with Google
              </button>
              <button className="w-full border py-2 rounded flex items-center justify-center gap-2 mb-2">
                <img src="email-icon.png" alt="Email" className="w-5" />
                Continue with Email
              </button>
              {/* <button className="w-full border py-2 rounded flex items-center justify-center gap-2">
                <img src="facebook-logo.png" alt="Facebook" className="w-5" />
                Continue with Facebook
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
