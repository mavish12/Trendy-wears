import React from "react";
import SearchBar from "../components/Common/SearchBar";
import CartContents from "../components/Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartPage = () => {

    const navigate = useNavigate();
    const handleCheckout = () =>{
        navigate('/checkout');
        console.log("Checkout button clicked");
    }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with ONLY SearchBar */}
      {/* <header className="shadow-md p-4 bg-white">
        <div className="container mx-auto flex justify-center">
          <SearchBar />
        </div>
      </header> */}

      {/* Main Cart Content */}
      <main className="flex-grow flex justify-center items-center p-4">
        <div className="w-full md:w-1/2 sm:w-3/4 h-full bg-white shadow-lg flex flex-col">
          {/* Cart Content / Cart Items */}
          <div className="flex-grow p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            <CartContents />
          </div>
          {/* Checkout Section */}
          <div className="p-4 bg-white border-t">
            <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition">
              Checkout
            </button>
            <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
              Shipping, taxes, and discount coupon codes calculated at checkout.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
