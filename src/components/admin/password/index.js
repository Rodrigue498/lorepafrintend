import React, { useState } from "react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
    } else {
      alert("Password changed successfully!");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <p className="text-gray-500 text-sm">
            <span className="text-blue-500">Home</span> &gt; <span>Setting</span> &gt; <span>Change Password</span>
          </p>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-semibold mb-6">Change Password</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Current Password */}
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Current Password"
              required
            />
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="New Password"
              required
            />
            <p className="text-gray-500 text-sm mt-1">
              * Require at least one uppercase, one lowercase letter, one number, and one symbol.
            </p>
          </div>

          {/* Confirm New Password */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              New Password Again
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="New Password Again"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Change Password
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={() => alert("Cancelled")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
