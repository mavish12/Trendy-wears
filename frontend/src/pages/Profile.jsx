import React from "react";
import MyOrderPage from "./MyOrderPage";
import { MdLogout } from "react-icons/md";

const Profile = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto py-4 px-1 md:px-5 lg:px-10 ">
        <div className="">
          {/* Left section User Details Display */}
          <div className="w-full flex justify-between shadow-[0_2px_16px_rgba(0,0,0,0.2)] rounded-lg px-3 md:px-10 py-2 md:py-4">
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                Shivam Lodh
              </h1>
              <p className="text-md md:text-lg lg:text-xl text-gray-600">
                slodh079@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <button className="flex items-center gap-5 font-bold bg-red-500 text-white rounded px-3 md:px-8 py-3 text-sm md:text-base hover:bg-red-600">
                <span className="hidden md:block">Logout</span>
                <MdLogout className="text-lg md:text-2xl" />
              </button>
            </div>
          </div>
          {/* Orders Table */}
          <div className="w-full ">
            <MyOrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
