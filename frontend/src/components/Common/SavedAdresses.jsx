import React, { useEffect, useRef, useState } from "react";
import { CgMoreVertical } from "react-icons/cg";
import AddressForm from "../../AddressForm";

const SavedAddress = ({ savedAddresses= [], setSavedAddresses, shippingAddress, setShippingAddress }) => {
  //   const handleSelectAddress = (address) => {
  //     setShippingAddress(address); // Updates the selected address
  //   };

  const [openMoreIndexToggle, setOpenMoreIndexToggle] = useState(null);
  const [editAddressIndex, setEditAddressIndex] = useState(null);
  const moreRef = useRef(null);

  // To open the edit and delete options
  const handleMoreToggle = (index) => {
    setOpenMoreIndexToggle(openMoreIndexToggle === index ? null : index);
  };

  const handleEditAddress = (index) =>{
    // console.log("Edit Address Clicked", savedAddresses[index])
    setEditAddressIndex(index);
    setOpenMoreIndexToggle(null);
  }

  const handleSaveEditedAddress = (updatedAddress) =>{
    setSavedAddresses((prevAddresses) =>
      {
        const newAddresses = [...prevAddresses];
        newAddresses[editAddressIndex] = updatedAddress;
        return newAddresses;
      }
  );
    setEditAddressIndex(null);
  }

  const handleCancelEdit = () => {
    setEditAddressIndex(null);
  };

  const handleDeleteAddress = (index) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
    const updatedAddress = savedAddresses.filter((_, i)=> i !== index);
    setSavedAddresses(updatedAddress);
    setOpenMoreIndexToggle(null);
    }
  }

  //To close the options by clicking anywhere outside 
  useEffect(() => {
    const handleClickOutside = (event) =>{
      if(moreRef.current && !moreRef.current.contains(event.target)){
        setOpenMoreIndexToggle(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>{
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[openMoreIndexToggle])

  return (
    <div
      className="rounded-lg mt-8"
      style={{
        boxShadow:
          "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
      }}
    >
      {savedAddresses?.length > 0 ? (
        savedAddresses.map((address, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-b-gray-300 px-5 py-5"
          > 
          {editAddressIndex === index ? (
            <AddressForm shippingAddress={address} 
            onSave={(updatedAddress) => handleSaveEditedAddress(updatedAddress)} 
            onCancel={handleCancelEdit} />
          ) 
        : (
          <>
            <div className="w-9/12">
              <p className="bg-gray-300 text-xs px-5 py-1 w-fit uppercase tracking-tighter rounded text-gray-600">
                {address.addressType}
              </p>
              <div className="flex items-center gap-16 pt-2 pb-5">
                <p>
                  <strong>
                    {address.firstName} {address.lastName}
                  </strong>
                </p>
                <p className="text-sm">
                  <strong>{address.phone}</strong>
                </p>
              </div>
              <p>
                {address.address}, {address.city}, {address.state} -{" "}
                <strong>{address.postalCode}</strong>{" "}
              </p>
              <p>{address.country}</p>
              {/* <button
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => handleSelectAddress(address)}
              >
                Use This Address
              </button> */}
            </div>
            <div className="relative">
              <CgMoreVertical
                onClick={() => handleMoreToggle(index)}
                className="cursor-pointer"
              />
              {openMoreIndexToggle === index && (
                <div
                  ref={moreRef}
                  className="absolute right-0 top-6 bg-white shadow-md shadow-purple-400 rounded-lg w-24 flex flex-col items-start z-10"
                >
                  <button onClick={()=> handleEditAddress(index)} className="w-full rounded-lg px-4 py-2 hover:bg-gray-100 text-left">
                    Edit
                  </button>
                  <button onClick={()=> handleDeleteAddress(index)} className="w-full rounded-lg px-4 py-2 hover:bg-gray-100 text-left">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </>
        )}
            
          </div>
        ))
      ) : (
        <p>No saved addresses found.</p>
      )}
    </div>
  );
};

export default SavedAddress;
