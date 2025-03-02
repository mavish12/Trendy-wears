import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";
// import { useLocation } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  // const isCartPage = location.pathname === "/cart";
  return (
    <header className="border-b border-gray-200">
      {/* Topbar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />

      {/* Card Drawer */}
    </header>
  );
};

export default Header;
