import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) =>{
    e.preventDefault();
    console.log("Search Team", searchTerm);
    setSearchTerm("");
    setIsOpen(false);
  }
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      } `}
    >
      {isOpen ? (
        <form className="relative flex item-center justify-center w-full" onSubmit={handleSearch}>
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e)=>{setSearchTerm(e.target.value)}}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <BsSearch className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          {/* Close button */}
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={handleSearchToggle}
          >
            <IoCloseSharp className="w-6 h-6 text-gray-700" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <BsSearch className="w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
