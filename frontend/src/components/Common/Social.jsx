import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Social = () => {
  return (
    <div className="pt-4 border-t border-t-gray-400 mx-20 mt-10">
      <div className="grid grid-cols-1 justify-center text-sm text-center md:space-x-6 font-semibold text-gray-600">
        <span>©2025 INYLE's rights reserved</span>
      </div>
      {/* Follow Us */}

      <div className="flex justify-center pt-4 space-x-4 ">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <TbBrandMeta className="h-5 w-5" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaInstagram className="h-5 w-5" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <RiTwitterXLine className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Social;
