
import React from "react";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage";
import TrailerRentalPage from "./components/trailer";
import TrailerCategories from "./components/trailercategorie";
import TopDestinations from "./components/Destination";
import TrailerRental from "./components/rentals";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <TrailerRentalPage />
      <TrailerCategories />
      <TopDestinations />
      <TrailerRental />
    </div>
  );
}

export default App;
