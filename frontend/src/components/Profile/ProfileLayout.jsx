import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 mx-40">
      {/* Left side Options */}
      <div className="lg:w-3/12 border">
        <div className="flex justify-start items-center gap-3 pb-6 border-b-2 border-b-gray-300 p-4">
          <img
            src="https://picsum.photos/200?random=20"
            alt=""
            className="w-12 h-12 rounded-lg"
          />
          <div className="">
            <p className="text-xs">Hello,</p>
            <h4 className="text-lg font-bold">Shivam Lodh</h4>
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-start gap-4 px-4 pt-4 pb-3">
            <FaUserAlt className="text-xl text-purple-500" />
            <h3 className="uppercase text-lg font-bold text-gray-400 tracking-tight">
              Account Settings
            </h3>
          </div>
          <div className=" text-sm tracking-tight">
            <Link to="#" >
              <div className="py-3 pl-14 cursor-pointer hover:bg-gray-100">Profile Information</div>
            </Link>
            <Link to="#">
                <div className="py-3 pl-14 cursor-pointer hover:bg-gray-100">Manage Addresses</div>
            </Link>
            <Link to="#">
                <div className="py-3 pl-14 cursor-pointer hover:bg-gray-100">Go To Home Page</div>
            </Link>
          </div>
        </div>
      </div>
      {/* Right side Detail Pages through Outlet */}
      <div className="lg:w-9/12 border">BBBBBBBBBBBBBBBBBBBBBB</div>
    </div>
  );
};

export default ProfileLayout;
