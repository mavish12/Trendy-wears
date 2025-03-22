import React from "react";

const AddressForm = ({ shippingAddress, setShippingAddress, onSave, onCancel }) => {
  return (
    <div>
      <h3 className="text-lg mb-4">Delivery</h3>
      {/* Name */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            value={shippingAddress.firstName}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, firstName: e.target.value })
            }
            className="block w-full p-2 border rounded"
            required
            placeholder="First Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            value={shippingAddress.lastName}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, lastName: e.target.value })
            }
            className="block w-full p-2 border rounded"
            required
            placeholder="Last Name"
          />
        </div>
      </div>
      {/* Address */}
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          value={shippingAddress.address}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, address: e.target.value })
          }
          className="block w-full p-2 border rounded"
          placeholder="Full Address"
          required
        />
      </div>
      {/* Landmark */}
      <div className="mb-4">
        <label className="block text-gray-700">Landmark</label>
        <input
          type="text"
          value={shippingAddress.landmark}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, landmark: e.target.value })
          }
          className="block w-full p-2 border rounded"
          placeholder="A landmark to your address"
          required
        />
      </div>
      {/* City and Postal code */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            value={shippingAddress.city}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, city: e.target.value })
            }
            className="block w-full p-2 border rounded"
            required
            placeholder="City Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Postal Code</label>
          <input
            type="text"
            value={shippingAddress.postalCode}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
            }
            className="block w-full p-2 border rounded"
            required
            placeholder="Postal Code"
          />
        </div>
      </div>
      {/* Country */}
      <div className="mb-4">
        <label className="block text-gray-700">Country</label>
        <input
          type="text"
          value={shippingAddress.country}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, country: e.target.value })
          }
          className="block w-full p-2 border rounded"
          placeholder="Country"
          required
        />
      </div>
      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          value={shippingAddress.phone}
          onChange={(e) =>
            setShippingAddress({ ...shippingAddress, phone: e.target.value })
          }
          className="block w-full p-2 border rounded"
          placeholder="Phone Number"
          required
        />
      </div>
      {/* Save & Cancel Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          className="bg-purple-700 text-white px-4 py-2 rounded shadow"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
