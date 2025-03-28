import React from 'react'
import { CgMoreVertical } from 'react-icons/cg';

const SelectAddress = ({ savedAddresses, setShippingAddress }) => {
  return (
      <div
        className="rounded-lg mt-8"
        style={{
          boxShadow:
            "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
        }}
      >
        {savedAddresses.length > 0 ? (
          savedAddresses.map((address, index) => (
            <div key={index}  className="flex justify-between border px-5 py-5">
              <div className="w-9/12">
                {/* <p className="bg-gray-300 text-xs px-5 py-1 w-fit uppercase tracking-tighter rounded text-gray-600">
                  {address.addressType}
                </p> */}
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
              <div>
                <CgMoreVertical className="cursor-pointer"/>
              </div>
            </div>
          ))
        ) : (
          <p>No saved addresses found.</p>
        )}
      </div>
    );
}

export default SelectAddress