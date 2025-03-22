import React from "react";

const SavedAddress = ({ savedAddresses, setShippingAddress }) => {
  const handleSelectAddress = (address) => {
    setShippingAddress(address); // Updates the selected address
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold mb-2">Saved Addresses</h3>
      {savedAddresses.length > 0 ? (
        savedAddresses.map((address, index) => (
          <div key={index} className="p-3 border-b">
            <p><strong>{address.firstName} {address.lastName}</strong></p>
            <p>{address.address}, {address.city}, {address.postalCode}</p>
            <p>{address.country}</p>
            <button 
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => handleSelectAddress(address)}
            >
              Use This Address
            </button>
          </div>
        ))
      ) : (
        <p>No saved addresses found.</p>
      )}
    </div>
  );
};

export default SavedAddress;
