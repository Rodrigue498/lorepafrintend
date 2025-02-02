import React from "react";

const BookingReport = () => {
  const bookings = []; // Empty array to simulate no bookings

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">
        <span className="text-blue-600 cursor-pointer">Home</span> &gt; Booking
        History
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Booking History</h1>

      {/* Tabs */}
      <div className="border-b border-gray-300 mb-4">
        <ul className="flex space-x-6 text-gray-600">
          <li className="border-b-2 border-blue-600 text-blue-600 pb-2 font-bold cursor-pointer">
            ALL BOOKING
          </li>
          <li className="cursor-pointer hover:text-blue-600">COMPLETED</li>
          <li className="cursor-pointer hover:text-blue-600">PROCESSING</li>
          <li className="cursor-pointer hover:text-blue-600">CONFIRMED</li>
          <li className="cursor-pointer hover:text-blue-600">CANCELLED</li>
          <li className="cursor-pointer hover:text-blue-600">PAID</li>
          <li className="cursor-pointer hover:text-blue-600">UNPAID</li>
          <li className="cursor-pointer hover:text-blue-600">PARTIAL PAYMENT</li>
        </ul>
      </div>

      {/* Conditional Rendering */}
      {bookings.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-500 text-lg">No booking history found.</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-200 text-gray-600">
                <th className="p-3">Type</th>
                <th className="p-3">Title</th>
                <th className="p-3">Order Date</th>
                <th className="p-3">Execution Time</th>
                <th className="p-3">Total</th>
                <th className="p-3">Paid</th>
                <th className="p-3">Remain</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 flex items-center">
                    🚗 <span className="ml-2">{booking.type}</span>
                  </td>
                  <td className="p-3 text-blue-600 cursor-pointer">
                    {booking.title}
                  </td>
                  <td className="p-3">{booking.orderDate}</td>
                  <td className="p-3 text-sm text-gray-600">
                    Start date: {booking.startDate} <br />
                    End date: {booking.endDate} <br />
                    Duration: {booking.duration}
                  </td>
                  <td className="p-3 font-bold">{booking.total}</td>
                  <td className="p-3">{booking.paid}</td>
                  <td className="p-3">{booking.remain}</td>
                  <td
                    className={`p-3 font-semibold ${
                      booking.status === "Unpaid" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="p-3 space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      🔍 Details
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded">
                      🧾 Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingReport;
