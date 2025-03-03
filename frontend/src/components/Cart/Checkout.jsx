import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "L",
      color: "Black",
      price: 100,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneeker",
      size: "40",
      color: "Red",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 175,
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null)
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    landmark: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) =>{
    e.preventDefault();
    setCheckoutId(123)
  }

  const handlePaymentSuccess = (details) =>{
    console.log("Payment Successful", details)
    navigate("/order-confirmation")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tight">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          {/* Email */}
          <div className="mb-4 ">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@gmail.com"
              className="block w-full p-2 border rounded"
              placeholder="Email"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          {/* Name */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})}
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
                onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                className="block w-full p-2 border rounded"
                required
                placeholder="Last Name"
              />
            </div>
          </div>
          {/* Address */}
          <div className="mb-4 ">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})}
              className="block w-full p-2 border rounded"
              placeholder="Full Address"
              required
            />
          </div>
          {/* Landmark */}
          <div className="mb-4 ">
            <label className="block text-gray-700">Landmark</label>
            <input
              type="text"
              value={shippingAddress.landmark}
              onChange={(e) => setShippingAddress({...shippingAddress, landmark: e.target.value})}
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
                onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
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
                onChange={(e) => setShippingAddress({...shippingAddress, postalCode: e.target.value})}
                className="block w-full p-2 border rounded"
                required
                placeholder="Postal Code"
              />
            </div>
          </div>
          {/* Country */}
          <div className="mb-4 ">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
              className="block w-full p-2 border rounded"
              placeholder="Country"
              required
            />
          </div>
          {/* Phone Number */}
          <div className="mb-4 ">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
              className="block w-full p-2 border rounded"
              placeholder="Phone Number"
              required
            />
          </div>
        {/* Checkout Button */}
          <div className="mb-6">
            {!checkoutId ? (
                <button type="submit" className="w-full bg-black text-white py-3 rounded">Continue to Payment</button>
            ) : (
                <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>  
                {/* Paypal Component */}
                <PaypalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment failed, try again!")}/>
                </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
