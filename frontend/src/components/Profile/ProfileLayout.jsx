import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaAngleRight, FaBoxOpen } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Link, Outlet, useNavigate, useLocation  } from "react-router-dom";

const ProfileLayout = () => {
//   const navigate = useNavigate();
//   const handleToMyOrder = () => {
//     navigate("my-orders");
//   };
const location = useLocation(); 

  return (
    <div className="flex md:flex-row flex-col gap-4 mx-40 py-10">
      {/* Left side Options */}
      <div className="lg:w-3/12 shadow-lg h-fit rounded-lg"
        style={{
            boxShadow:
              "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
          }}
      >
        <div className="flex justify-start items-stretch gap-3 pb-6 border-b-2 border-b-gray-300 p-4">
          <img
            src="https://picsum.photos/200?random=20"
            alt=""
            className="w-20 h-20 rounded-lg"
          />
          <div className="">
            <p className="text-xs">Hello,</p>
            <h4 className="text-lg font-bold">Shivam Lodh</h4>
            <p className="text-xs pt-5">Happy Shopping 💕</p>
          </div>
        </div>

        <Link to="/my-orders">
        <div
          className="flex justify-between items-center px-4 py-4 border-b-2 border-b-gray-300 cursor-pointer"
        >
          <div className="flex items-center justify-start gap-6 ">
            <FaBoxOpen className="text-xl text-purple-500" />
            <h3 className="uppercase text-lg font-bold text-gray-700 tracking-tight">
              My Orders
            </h3>
          </div>
          <FaAngleRight />
        </div>
        </Link>
        <div className="">
          <div className="flex items-center justify-start gap-6 px-4 pt-4 pb-3">
            <FaUserAlt className="text-xl text-purple-500" />
            <h3 className="uppercase text-lg font-bold text-gray-500 tracking-tight">
              Account Settings
            </h3>
          </div>
          <div className=" text-sm tracking-tight pb-5 ">
            <Link to="/profile_layout">
              <div className={`py-3 pl-14 cursor-pointer text-gray-700 hover:bg-purple-200 hover:text-purple-900 hover:font-bold 
              ${location.pathname === "/profile_layout" ? "bg-purple-300 text-purple-900 font-bold" : ""}`}>
                Profile Information
              </div>
            </Link>
            <Link to="/profile_layout/address">
              <div className={`py-3 pl-14 cursor-pointer text-gray-700 hover:bg-purple-200 hover:text-purple-900 hover:font-bold 
              ${location.pathname === "/profile_layout/address" ? "bg-purple-300 text-purple-900 font-bold" : ""}`}>
                Manage Addresses
              </div>
            </Link>
            <Link to="/">
              <div className="py-3 pl-14 cursor-pointer text-gray-700 hover:bg-purple-200 hover:text-purple-900 hover:font-bold">
                Go To Home Page
              </div>
            </Link>
          </div>
        </div>
        
          <div className="flex justify-between items-center px-4 py-4 border-b-2 border-b-gray-300 bg-red-500 m-2">
            <div className="flex items-center justify-start gap-6 ">
              <FaUserAlt className="text-xl" />
              <h3 className="uppercase text-lg font-bold tracking-tight">
                Logout
              </h3>
            </div>
            <MdLogout className="text-2xl" />
          </div>
        
      </div>
      {/* Right side Detail Pages through Outlet */}
      <div className="lg:w-9/12 ">
        <Outlet/>
      </div>
    </div>
  );
};

export default ProfileLayout;
