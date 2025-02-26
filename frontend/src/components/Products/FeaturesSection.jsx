import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";
import { ImLoop, ImCreditCard } from "react-icons/im";

const features = [
  {
    icon: <HiShoppingBag className="text-xl" />,
    title: "Free International Shipping",
    description: "On all orders over $100.00",
  },
  {
    icon: <ImLoop className="text-xl" />,
    title: "45 Days Return",
    description: "Full Money Back Guarantee",
  },
  {
    icon: <ImCreditCard className="text-xl" />,
    title: "Secure Checkout",
    description: "100% secured checkout",
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">{feature.icon}</div>
            <h4 className="tracking-tighter mb-2 uppercase">{feature.title}</h4>
            <p className="text-gray-600 text-sm tracking-tighter">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
