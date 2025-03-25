  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import PaypalButton from "./PaypalButton";
  import AddressForm from "../../AddressForm";
  import { FaPlus } from "react-icons/fa";
import SavedAddress from "../Common/SavedAdresses";

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

  const Checkout = ({ shippingAddress, setShippingAddress, savedAddresses, setSavedAddresses }) => {
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null)
    const [addNewAddress, setAddNewAddress] = useState(false)
    // const [savedAddresses, setSavedAddresses] = useState([]);
    // const [shippingAddress, setShippingAddress] = useState({
    //   firstName: "",
    //   lastName: "",
    //   address: "",
    //   landmark: "",
    //   city: "",
    //   postalCode: "",
    //   country: "",
    //   phone: "",
    // });

    const handleCreateCheckout = (e) =>{
      e.preventDefault();
      setCheckoutId(123)
    }

    const handleNewAddress = () =>{
      setAddNewAddress(!addNewAddress);
  }
  const handleSaveAddress = () =>{
    // setSavedAddresses([...savedAddresses, shippingAddress]);
    // console.log("All Address", savedAddresses);
    // setAddressField(false)    


    if (shippingAddress.address) {
      setSavedAddresses((prevAddresses) => [...prevAddresses, shippingAddress]);
      console.log("All Saved Addresses:", savedAddresses);
    }
    setAddNewAddress(false);
}

const handleCancel = () => {
  setAddNewAddress(false); // Collapse form without saving
  };

  useEffect(() => {
    console.log("Updated Saved Addresses:", savedAddresses);
  }, [savedAddresses]);

    const handlePaymentSuccess = (details) =>{
      console.log("Payment Successful", details)
      navigate("/order-confirmation")
    }
//     console.log("AllAddresses mounted");
// console.log("Current Path:", location.pathname); 

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tight">
        {/* Left Section */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl uppercase mb-6">Checkout</h2>
          <form onSubmit={handleCreateCheckout}>
            <h3 className="text-lg mb-4">Contact Details</h3>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value="user@gmail.com"
                className="block w-full p-2 border rounded"
                placeholder="Email"
                disabled
              />
            </div>

            {/* Use the AddressForm Component */}
            {!addNewAddress ? (
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
            <AddressForm shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} onSave={handleSaveAddress}  onCancel={handleCancel}/>
            )}
            {/* Saved Addresses */}
          <SavedAddress savedAddresses={savedAddresses} setShippingAddress={setShippingAddress} />

            {/* Checkout Button */}
            <div className="mb-6">
              {!checkoutId ? (
                <button type="submit" className="w-full bg-black text-white py-3 rounded">
                  Continue to Payment
                </button>
              ) : (
                <div>
                  <h3 className="text-lg mb-4">Pay with Paypal</h3>
                  {/* Paypal Component */}
                  <PaypalButton
                    amount={100}
                    onSuccess={handlePaymentSuccess}
                    onError={(err) => alert("Payment failed, try again!")}
                  />
                </div>
              )}
            </div>
          </form>
        </div>
        {/* Right Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg mb-4">Order Summery</h3>
          <div className="border-t py-4 mb-4">
              {cart.products.map((product, index) => (
                  <div key={index} className="flex items-start justify-between py-2 border-b">
                      <div className="flex items-start">
                          <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4"/>
                          <div className="">
                              <h3 className="text-md">{product.name}</h3>
                              <p className="text-gray-500">Size: {product.size}</p>
                              <p className="text-gray-500">Colour: {product.color}</p>
                          </div>
                      </div>
                      <p className="text-xl">${product.price?.toLocaleString()}</p>
                  </div>
              ))}
          </div>
          <div className="flex justify-between items-center text-lg mb-4">
              <p>Subtotal</p>
              <p>$ {cart.totalPrice?.toLocaleString()}</p>
          </div>
          <div className="flex justify-between items-center text-lg">
              <p>Shipping</p>
              <p>Free</p>
          </div>
          <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
              <p>Total</p>
              <p>$ {cart.totalPrice?.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  };

  export default Checkout;
