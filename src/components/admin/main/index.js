import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Bell, Home, History, Heart, User, ChevronDown, ChevronUp, Car, Newspaper, FileText, 
  ClipboardList, Shield, MessageSquare, CreditCard, Key, LayoutDashboard, PlusCircle, List, CheckSquare, RefreshCcw 
} from "lucide-react";
import Settings from "../myprofile";
import BookingHistory from "./bookinghistory";
import ManageNews from "../managenews";
import ChangePassword from "../password";
import VerificationData from "../verification";
import BookingReport from "./bookingreport";
import ManageCars from "../managecars/all car";
import AddNewCar from "../managecars/add car/content";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const user = location.state || JSON.parse(localStorage.getItem("user"));
  const [activePage, setActivePage] = useState("dashboard");
  const [carDropdownOpen, setCarDropdownOpen] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);

  const pages = {
    dashboard: { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    bookingHistory: { name: "Booking History", icon: <History size={20} /> },
    wishlist: { name: "Wishlist", icon: <Heart size={20} /> },
    profile: { name: "My Profile", icon: <User size={20} /> },
    manageCar: { name: "Manage Car", icon: <Car size={20} /> },
    manageNews: { name: "Manage News", icon: <Newspaper size={20} /> },
    bookingReport: { name: "Booking Report", icon: <FileText size={20} /> },
    enquiryReport: { name: "Enquiry Report", icon: <ClipboardList size={20} /> },
    verifications: { name: "Verifications", icon: <Shield size={20} /> },
    messages: { name: "Messages", icon: <MessageSquare size={20} /> },
    payouts: { name: "Payouts", icon: <CreditCard size={20} /> },
    changePassword: { name: "Change Password", icon: <Key size={20} /> },
  };

  const handlePageChange = (key) => {
    setActivePage(key);
    if (key === "dashboard") {
      setHideSidebar(true); // Hide sidebar when Dashboard is clicked
    }
  };

  const data = {
    labels: ["01/27/2025", "01/28/2025", "01/29/2025"],
    datasets: [
      {
        label: "Total Earning",
        data: [0, 0, 0],
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Total Pending",
        data: [0, 0, 0],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
      },
    ],
  };

  return (
    <div className="flex">
      {!hideSidebar && (
        <aside className="w-96 bg-blue-900 text-white p-5 flex flex-col">
          <div className="flex flex-col items-center mb-5">
            <div className="w-20 h-20 bg-gray-700 rounded-full mb-2"></div>
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">{user?.role || "Administrator"}</span>
            <h2 className="mt-2 text-lg">{user?.name || "Guest User"}</h2>
            <p className="text-gray-400 text-sm">
            Member Since {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
            </p>
          </div>
          <nav className="space-y-3">
            {Object.entries(pages).map(([key, { name, icon }]) => (
             key === "manageCar" ? (
              <div key={key}>
                <button
                  onClick={() =>{ setCarDropdownOpen(!carDropdownOpen);handlePageChange("allCars")}}
                  className="flex items-center justify-between w-full text-left text-xl text-white border-0 bg-blue-900 py-2 px-4 rounded hover:bg-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    {icon}
                    <span>{name}</span>
                  </div>
                  {carDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {carDropdownOpen && (
                    <div className="ml-8 space-y-2">
                      <button onClick={() => handlePageChange("allCars")} className="flex items-center space-x-2 bg-blue-900 text-white text-left text-lg w-full border border-0 px-4 py-2 rounded hover:bg-gray-600">
                        <List size={20} /> <span>All Cars</span>
                      </button>
                      <button onClick={() => handlePageChange("addCar")} className="flex items-center space-x-2 bg-blue-900 text-white text-left text-lg w-full border border-0 px-4 py-2 rounded hover:bg-gray-600">
                        <PlusCircle size={20} /> <span>Add Car</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-blue-900 text-white text-left text-lg w-full border border-0 px-4 py-2 rounded hover:bg-gray-600">
                        <CheckSquare size={20} /> <span>Availability</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-blue-900 text-white text-left text-lg w-full border border-0 px-4 py-2 rounded hover:bg-gray-600">
                        <RefreshCcw size={20} /> <span>Recovery</span>
                      </button>
                    </div>
                  )}
              </div>
            ) : (
              <button
                key={key}
                onClick={() => handlePageChange(key)}
                className={`flex items-center space-x-3 text-white text-xl border-0 block bg-blue-900 py-2 px-4 rounded w-full text-left ${
                  activePage === key ? "bg-gray-800" : "hover:bg-gray-700"
                }`}
              >
                {icon}
                <span>{name}</span>
              </button>
            )
            ))}
          </nav>
        </aside>
      )}

      <main className={`flex-1 bg-gray-100 p-6 ${hideSidebar ? "w-full" : ""}`}>
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">{pages[activePage]?.name || "Dashboard"}</h1>
          <Button variant="ghost" onClick={() => setHideSidebar(false)}>
            <Bell className="w-6 h-6" />
          </Button>
        </header>

        {activePage === "dashboard" && (
          <>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-5 text-center">
                  <p className="text-gray-600">PENDING</p>
                  <h2 className="text-2xl font-bold">$0</h2>
                  <p className="text-gray-500">Total pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 text-center">
                  <p className="text-gray-600">EARNINGS</p>
                  <h2 className="text-2xl font-bold">$0</h2>
                  <p className="text-gray-500">Total earnings</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 text-center">
                  <p className="text-gray-600">BOOKINGS</p>
                  <h2 className="text-2xl font-bold">0</h2>
                  <p className="text-gray-500">Total bookings</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 text-center">
                  <p className="text-gray-600">SERVICES</p>
                  <h2 className="text-2xl font-bold">0</h2>
                  <p className="text-gray-500">Total bookable services</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Earning Statistics</h2>
              <Line data={data} />
            </div>
          </>
        )}

        {activePage === "bookingHistory" && <BookingHistory user={user}/>}
        {activePage === "allCars" && <ManageCars user={user}/>}
        {activePage === "addCar" && <AddNewCar user={user}/>}
        {activePage === "profile" && <Settings user={user} />}
        {activePage === "manageNews" && <ManageNews user={user}/>}
        {activePage === "changePassword" && <ChangePassword user={user}/>}
        {activePage === "verifications" && <VerificationData user={user}/>}
        {activePage === "bookingReport" && <BookingReport user={user}/>}

        {activePage !== "dashboard" &&
          activePage !== "bookingHistory" &&
          activePage !== "profile" &&
          activePage !== "manageNews" &&
          activePage !== "changePassword" &&
          activePage !== "verifications" &&
          activePage !== "bookingReport" &&
          activePage !== "allCars" &&
          activePage !== "addCar" && (
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{pages[activePage].name}</h2>
              <p className="text-gray-500">Content for {pages[activePage].name}</p>
            </div>
          )}
      </main>
    </div>
  );
}
