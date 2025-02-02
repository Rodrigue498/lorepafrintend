import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import FooterScreen from "./components/footerscreen";
import HomePage from "./components/homepage";
import TrailerRentalPage from "./components/trailer";
import TrailerCategories from "./components/trailercategorie";
import TopDestinations from "./components/Destination";
import TrailerRental from "./components/rentals";
import TrailerSection from "./components/trailersection";
import RevenueBanner from "./components/revennuebanner";
import AboutUs from "./components/aboutus";
import AboutUs1 from "./components/aboutus/about";
import WhyLorepa from "./components/whylorepa";
import CategoryCarousel from "./components/categories";
import ComparisonSection from "./components/comparison";
import BlogPage from "./components/blogpage";
import BlogComparison from "./components/blogpage/blog";
import TermsOfUse from "./components/termofuse";
import PrivacyPolicy from "./components/privacy";
import LoginModal from "./components/loginmodel";
import CarRental from "./components/carrental";
import Dashboard from "./components/admin/main";
import CarSharingBanner from "./components/becomehost";
import TrailerRentalEstimator from "./components/rentestimator";
import InsuranceFAQ from "./components/insurance";
import InsuranceInfo from "./components/insurranceinfo";
import SignUpCar from "./components/upcar";

function ScrollToTop() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Function to toggle login modal
  const toggleLoginModal = () => {
    setIsLoginModalOpen((prev) => !prev);
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar onLoginClick={toggleLoginModal} />

      {/* Login Modal */}
      {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}

      {/* ✅ Use React Router for Navigation */}
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <TrailerRentalPage />
            <TrailerCategories />
            <TopDestinations />
            <TrailerRental />
            <TrailerSection />
            <ComparisonSection />
            <RevenueBanner />
          </>
        } />
        <Route path="/howLorepaWorks" element={
          <>
            <AboutUs />
            <AboutUs1 />
            <WhyLorepa />
            <CategoryCarousel />
          </>
        } />
        <Route path="/termofuse" element={<TermsOfUse />} />
        <Route path="/learnmore" element={
          <>
            <BlogPage />
            <BlogComparison />
          </>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/categories" element={<CarRental />} />
        <Route path="/becomehost" element={
          <>
            <CarSharingBanner /> 
            <TrailerRentalEstimator />
            <InsuranceFAQ />
            <InsuranceInfo />
            <SignUpCar />
          </>
        } />
      </Routes>

      {/* Show Footer only if not on "dashboard" */}
      <FooterScreen />
    </Router>
  );
}

export default App;
