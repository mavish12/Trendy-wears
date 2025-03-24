import React, { useEffect, useState } from "react";
import AddressForm from "../../AddressForm";
import { FaPlus } from "react-icons/fa";
import SavedAddress from "../Common/SavedAdresses";

const AllAddresses = ({ shippingAddress, setShippingAddress, savedAddresses, setSavedAddresses }) => {

    const [addressField , setAddressField] = useState(false);
    // const [savedAddresses, setSavedAddresses] = useState([]);
    const handleNewAddress = () =>{
        setAddressField(!addressField);
    }

    const handleSaveAddress = () =>{
        // setSavedAddresses([...savedAddresses, shippingAddress]);
        // console.log("All Address", savedAddresses);
        // setAddressField(false)    

        if (shippingAddress.address) {
            setSavedAddresses((prevAddresses) => [...prevAddresses, shippingAddress]);
            console.log("All Saved Addresses:", savedAddresses);
          }
        setAddressField(false);
    }

    const handleCancel = () => {
        setAddressField(false); // Collapse form without saving
      };

    useEffect(() => {
        console.log("Updated Saved Addresses:", savedAddresses);
      }, [savedAddresses]);

    

  return (
    <div
      className="w-full mx-auto p-6 shadow-lg rounded-lg"
      style={{
        boxShadow:
          "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
      }}
    >
      <h2 className="text-2xl font-bold mb-2">Manage Addresses</h2>
      {!addressField ? (
      <div onClick={handleNewAddress} className="flex items-center gap-6 py-4 px-6 text-purple-700" 
      style={{
        boxShadow:
          "1px -1px 4px 0px #B1C2F4 inset, -1px 2px 2px 0px #C8DBED inset",
      }}
      >
        <FaPlus />
        <h6 className="uppercase tracking-tight font-bold">Add a new address</h6>
      </div>
        ) : (
            <>
            <AddressForm shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} onSave={handleSaveAddress} onCancel={handleCancel}/>

            </>
     )}
     {/* Saved Addresses */}
     <SavedAddress savedAddresses={savedAddresses} setShippingAddress={setShippingAddress} />
    </div>
  );
};

export default AllAddresses;
