import React from "react";

const AddressForm = ({ shippingAddress, setShippingAddress, onSave, onCancel }) => {
  const countries = ["India", "USA", "Canada", "UK", "Germany"];
  const states = {
    India: ["Assam", "Delhi", "Maharashtra"],
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
  };
  const addressTypes = ["Home", "Work", "Other"];

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setShippingAddress({
      ...shippingAddress,
      country: newCountry,
      state: "", // Reset state selection when changing country
    });
  };

  return (
    <div>
      <h3 className="text-lg mb-4">Delivery</h3>

      {/* Name Fields */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            value={shippingAddress.firstName}
            onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
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
            onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
            className="block w-full p-2 border rounded"
            required
            placeholder="Last Name"
          />
        </div>
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <textarea
          value={shippingAddress.address}
          onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
          className="block w-full p-2 border rounded"
          placeholder="Full Address"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* City & Postal Code */}
        <div>
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            value={shippingAddress.city}
            onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
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
            onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
            className="block w-full p-2 border rounded"
            required
            placeholder="Postal Code"
          />
        </div>

        {/* Country & State */}
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <select
            value={shippingAddress.country}
            onChange={handleCountryChange}
            className="block w-full p-2 border rounded"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <select
            value={shippingAddress.state}
            onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
            className="block w-full p-2 border rounded"
            required
          >
            <option value="">Select State</option>
            {shippingAddress.country &&
              states[shippingAddress.country]?.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
        </div>

        {/* Landmark */}
        <div className="mb-4">
          <label className="block text-gray-700">Landmark</label>
          <input
            type="text"
            value={shippingAddress.landmark}
            onChange={(e) => setShippingAddress({ ...shippingAddress, landmark: e.target.value })}
            className="block w-full p-2 border rounded"
            placeholder="Landmark (Optional)"
          />
        </div>

        {/* Phone Numbers */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="tel"
            value={shippingAddress.phone}
            onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
            className="block w-full p-2 border rounded"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Alternate Phone</label>
          <input
            type="tel"
            value={shippingAddress.altPhone}
            onChange={(e) => setShippingAddress({ ...shippingAddress, altPhone: e.target.value })}
            className="block w-full p-2 border rounded"
            placeholder="Alternate Phone (Optional)"
          />
        </div>

        {/* Address Type */}
        <div className="mb-4">
          <label className="block text-gray-700">Address Type</label>
          <select
            value={shippingAddress.addressType}
            onChange={(e) => setShippingAddress({ ...shippingAddress, addressType: e.target.value })}
            className="block w-full p-2 border rounded"
            required
          >
            <option value="">Select Address Type</option>
            {addressTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Save & Cancel Buttons */}
      <div className="flex gap-4 mt-4">
        <button onClick={onCancel} className="bg-gray-300 text-gray-700 px-8 py-3 rounded shadow">
          Cancel
        </button>
        <button onClick={() => onSave(shippingAddress)} className="bg-purple-700 text-white px-8 py-3 rounded shadow">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
