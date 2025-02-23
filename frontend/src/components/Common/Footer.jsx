import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-0">
        <div className="">
          <h3 className="text-lg text-gray-800 font-bold mb-4 uppercase">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Be the first to grab special offers, discounts and new trendy
            collections.{" "}
          </p>
          <p className="text-gray-600 mb-4">
            Get notifications on events,festive giveaways.{" "}
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-4">
            Sign-up and get upto 20% off on your first order.
          </p>
          {/* Newsletter form */}
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded-r-md text-sm hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Shop Links */}
        <div className="grid justify-center">
          <h3 className="text-lg text-gray-800 mb-4 font-bold uppercase">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Kid's Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* Support Links */}
        <div className="grid justify-center">
          <h3 className="text-lg text-gray-800 mb-4 font-bold uppercase">About</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                FAQ's
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
              Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Other Links */}
        <div className="grid justify-center">
          <h3 className="text-lg text-gray-800 mb-4 font-bold">INYLE's support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Payments
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Shipping
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Cancellation & Return
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Terms of use
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-colors">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      <Social/>
    </footer>
  );
};

export default Footer;
