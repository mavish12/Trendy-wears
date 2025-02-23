import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const CartContents = () => {
  const [cartProducts, setCartProducts] = useState([
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 45,
      image: "https://picsum.photos/200?random=2",
    },
  ]);

  return (
    <div className="w-full h-full px-2 sm:px-4 md:px-6 overflow-y-auto">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white shadow-md py-4 sm:px-4 lg:pr-10 border border-gray-200 rounded-lg mb-4"
        >
          {/* Product Image */}
          <div className="w-full sm:w-1/4 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-30 sm:w-28 sm:h-28 md:w-40 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full sm:w-2/4 mt-0 sm:mt-2 sm:pl-4 lg:pb-4">
            <h3 className="font-semibold text-md sm:text-lg">{product.name}</h3>
            <p className="text-sm sm:text-base text-gray-500">
              Size: {product.size} | Color: {product.color}
            </p>

            {/* Quantity Controls */}
            <div className="flex items-center  mt-2">
              <button className="border rounded p-1 sm:p-2 bg-black/80 hover:bg-black transition">
                <RiSubtractFill className="text-white" />
              </button>
              <span className="mx-4 text-lg">{product.quantity}</span>
              <button className="border rounded p-1 sm:p-2 bg-black/80 hover:bg-black transition">
                <IoMdAdd className="text-white" />
              </button>
            </div>
          </div>

          {/* Price & Delete Button */}
          <div className="w-full sm:w-1/4 flex flex-col items-center sm:items-end sm:mt-0">    
            <p className="font-semibold text-lg sm:text-xl">
              ${product.price.toLocaleString()}
            </p>
            <button className="mt-12 hover:scale-110 transition">
              <MdDeleteForever className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
