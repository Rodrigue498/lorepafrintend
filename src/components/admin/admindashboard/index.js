import { useState } from "react";
import { Bell, Globe, Menu } from "lucide-react";

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`w-64 bg-blue-900 text-white ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <div className="p-4 text-lg font-bold">Admin Panel</div>
        <ul className="mt-4">
          {["Dashboard", "News", "Page", "Location", "Car", "User Plans", "Popup", "Coupon", "Reviews", "Media", "Menu", "Payouts", "Themes", "Setting", "Tools", "Users", "Reports"].map((item) => (
            <li key={item} className="px-6 py-2 hover:bg-blue-700 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-700 md:hidden">
              <Menu />
            </button>
            <span className="text-lg font-semibold">Home</span>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="text-gray-600" />
            <Bell className="text-gray-600" />
            <div className="flex items-center space-x-2">
              <span className="text-sm">System Admin</span>
              <span className="text-xs text-gray-500">Administrator</span>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className="p-6">
          <h2 className="text-2xl font-semibold">WELCOME SYSTEM!</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-indigo-500 text-white p-4 rounded-lg">
              <p className="text-xl">$0</p>
              <p className="text-sm">Total revenue</p>
            </div>
            <div className="bg-pink-500 text-white p-4 rounded-lg">
              <p className="text-xl">$0</p>
              <p className="text-sm">Total Earning</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <p className="text-xl">13</p>
              <p className="text-sm">Total bookable services</p>
            </div>
          </div>

          {/* Earnings Chart Placeholder */}
          <div className="bg-white shadow-md p-6 mt-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Earning Statistics</h3>
            <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              Chart Placeholder
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white shadow-md p-6 mt-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Recent Bookings</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">#</th>
                  <th className="py-2">Item</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Paid</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">#2</td>
                  <td className="py-2 text-blue-500">Vinfast Lux A2.0 Plus</td>
                  <td className="py-2">$1,000</td>
                  <td className="py-2">$0</td>
                  <td className="py-2 text-red-500">Unpaid</td>
                  <td className="py-2">10/27/2023 20:59</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
