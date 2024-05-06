import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/layout/NavBar";

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SellPage from "../pages/SellPage";
import AboutPage from "../pages/AboutPage";
import FAQsPage from "../pages/FAQsPage";

const RouteNavigate = () => {
  const [isLoggedIn] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <NavBar /> : <Navigate to="/login" />}
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default RouteNavigate;
