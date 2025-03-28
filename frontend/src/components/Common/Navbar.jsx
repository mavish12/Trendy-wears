import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import SearchBar from "./SearchBar";
// import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart"; // Check if it's the cart page

  // const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  // const toggleCartDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-medium">
          INYLE
        </Link>

        {/*Doing conditional rendering for showing the search bar and nothing else in the cart page nav */}
        {isCartPage ? (
          <SearchBar />
        ) : (
          <>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <Link to="/collections/all" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Men
              </Link>
              <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Women
              </Link>
              <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Kids
              </Link>
              <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Top Wear
              </Link>
              <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                Bottom Wear
              </Link>
            </div>

            {/* Right-side Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/admin" className="block px-2 py-1 rounded text-sm bg-black/80 text-white">Admin</Link>
              <Link to="/profile_layout" className="hover:text-black">
                <FaRegUser className="w-6 h-6 text-gray-700" />
              </Link>
              <Link to="/cart" className="relative hover:text-black" 
              // onClick={toggleCartDrawer}
              >
                <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 left-3 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">4</span>
              </Link>
               {/* Search Icon */}
            <SearchBar/>
              <button onClick={toggleNavDrawer} className="md:hidden">
                <GiHamburgerMenu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Cart Drawer */}
      {/* <CartDrawer toggleCartDrawer={toggleCartDrawer} drawerOpen={drawerOpen} /> */}

      {/* Mobile Navigation Drawer */}
      {!isCartPage && (
        <div
          className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            navDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleNavDrawer}>
              <IoCloseSharp className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <nav className="flex flex-col space-y-3 mt-10">
              <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black font-medium uppercase">
                Men
              </Link>
              <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black font-medium uppercase">
                Women
              </Link>
              <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black font-medium uppercase">
                Kids
              </Link>
              <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black font-medium uppercase">
                Top Wear
              </Link>
              <Link to="#" onClick={toggleNavDrawer} className="block text-gray-700 hover:text-black font-medium uppercase">
                Bottom Wear
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
