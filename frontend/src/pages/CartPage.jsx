import React from "react";
import SearchBar from "../components/Common/SearchBar";
import CartContents from "../components/Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { MdVerifiedUser } from "react-icons/md";

const CartPage = () => {

  const details = {
    items:3,
    actualTotal:23700,
    discount: 4300,
    delivery: 49,
    packaging: 59,
    handling: 30,
    platform: 20,
    total: 19400,
    totalSave: 4919
  }

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
    console.log("Checkout button clicked");
  };

  return (
    <div className="mx-32 flex justify-center">
      {/* Cart Content / Cart Items */}
      <div className="p-4 w-[60%]">
        <h2 className="text-center text-xl font-semibold pb-4">Your Cart</h2>
        <CartContents />
        {/* Checkout Section */}
        <button
          onClick={handleCheckout}
          className="block mx-auto w-fit px-40 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition "
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount coupon codes calculated at checkout.
        </p>
      </div>
      <div className="w-[40%] p-4 h-fit sticky top-0 self-start">
        <h2  className="text-center text-xl font-semibold pb-4">Price Details</h2>
        <div className="flex flex-col gap-5 border-2 border-gray-200 p-10">
          <div className="flex justify-between items-center">
            <h5 className="">Price ({details.items} items)</h5>
            <h5 className="font-semibold text-yellow-600">₹ {details.actualTotal}</h5>
          </div>
          <div className="flex justify-between items-center">
            <h5>Discount</h5>
            <h5 className="font-semibold text-green-500">- ₹ {details.discount}</h5>
          </div>
          <div className="flex justify-between items-center">
            <h5>Delivery Charges</h5>
            <div className="flex items-center justify-center gap-2">
            <h5 className="font-semibold text-red-400 line-through">₹ {details.delivery} </h5>
            <h6 className="text-green-500 font-bold">Free</h6>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h5>Secured Packaging Fee</h5>
            <h5 className="text-gray-600 font-semibold">₹ {details.packaging}</h5>
          </div>
          <div className="flex justify-between items-center">
            <h5>Secured Handling Fee</h5>
            <h5 className="text-gray-600 font-semibold">₹ {details.handling}</h5>
          </div>
          <div className="flex justify-between items-center">
            <h5>Platform Fee</h5>
            <h5 className="text-blue-500 font-semibold">₹ {details.platform}</h5>
          </div>
          <div className="flex justify-between items-center py-6 border-y-2 border-y-gray-200">
            <h5 className="font-bold text-lg">Total Amount</h5>
            <h5 className="font-extrabold text-xl">₹ {details.total}</h5>
          </div>
          <p className="text-green-600 font-semibold">Hurrayy!!🥳, You will save a total of  ₹{details.totalSave}  on this order</p>
        </div>
        <div className="flex items-center pt-8 px-3 gap-3">
        <MdVerifiedUser className="text-4xl text-green-600"/>
          <p className="text-sm font-mono font-semibold text-gray-500">Safe and Secure Payments.Easy returns.100% Authentic products.</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
