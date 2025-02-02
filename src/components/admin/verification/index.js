import React from "react";

const VerificationData = () => {
  const data = [
    { label: "Phone", value: "N/A", status: "Not Verified" },
    { label: "ID Card *", value: "N/A", status: "Not Verified" },
    { label: "Trade License *", value: "N/A", status: "Not Verified" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-700">Home</span> &gt;{" "}
          <span className="font-medium text-gray-700">Verification</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Verification data
        </h1>

        {/* Verification Items */}
        <div className="border rounded-md p-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b last:border-b-0 py-3"
            >
              <span className="text-gray-600 font-medium">{item.label}</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-700">{item.value}</span>
                <span className="bg-gray-300 text-gray-600 text-sm px-2 py-1 rounded-md">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Update Button */}
        <div className="mt-6 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md shadow-md flex items-center gap-2 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487c.291-.63.518-1.141.597-1.452a1 1 0 0 0-.763-1.194c-.332-.057-.794.081-1.43.307-.774.273-1.698.664-2.721 1.178-2.048.984-3.847 2.348-5.284 3.865C5.289 8.595 4.153 9.874 3.222 11.2c-.935 1.31-1.564 2.762-1.869 4.328-.058.3-.095.537-.11.696a1 1 0 0 0 .64 1.014c.269.109.636-.056.963-.195.828-.353 2.153-.869 4.013-1.553 3.648-1.297 7.633-2.597 11.183-4.13.713-.326 1.409-.684 2.074-1.084.664-.398 1.27-.877 1.747-1.422.532-.61.884-1.246 1.029-1.843a1 1 0 0 0-.788-1.184c-.31-.063-.73.016-1.234.197-2.22.79-5.159 1.874-8.712 3.03"
              />
            </svg>
            Update verification data
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationData;
