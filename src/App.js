import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage'; // Adjust the path if needed
import AboutUsPage from './Pages/Aboutuspage'; // Adjust the path if needed
import Navbar from './Components/Navbar'; // Import the Navbar component
import Footer from "./Components/Footer";
import UpcomingPackages from './Pages/UpcomingPackages';
import SwitzerlandTour from "./Components/Upcoming/SwitzerlandTour";



function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will remain visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="/about" element={<AboutUsPage />} /> {/* About Us Page Route */}
        <Route path="/UpcomingPackages" element={<UpcomingPackages />} />
        <Route path="/SwitzerlandTour" element={<SwitzerlandTour />} />

      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
