
import React from "react";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage";
import TrailerRentalPage from "./components/trailer";
import TrailerCategories from "./components/trailercategorie";
import TopDestinations from "./components/Destination";
import TrailerRental from "./components/rentals";
import TrailerSection from "./components/trailersection";
import RevenueBanner from "./components/revennuebanner";
import FooterScreen from "./components/footerscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <TrailerRentalPage />
      <TrailerCategories />
      <TopDestinations />
      <TrailerRental />
      <TrailerSection/>
      <RevenueBanner/>
      <FooterScreen/>
    </div>
  );
}

export default App;
