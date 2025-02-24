import React, { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const NewArrivals = [
    { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
    { _id: "2", name: "Casual Hoodie", price: 95, images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Hoodie" }] },
    { _id: "3", name: "Denim Jacket", price: 140, images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Denim Jacket" }] },
    { _id: "4", name: "Formal Blazer", price: 180, images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Formal Blazer" }] },
    { _id: "5", name: "Leather Jacket", price: 200, images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Leather Jacket" }] },
    { _id: "6", name: "Sweatshirt", price: 85, images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Sweatshirt" }] },
    { _id: "7", name: "Puffer Jacket", price: 160, images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Puffer Jacket" }] },
    { _id: "8", name: "Track Jacket", price: 130, images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Track Jacket" }] },
  ];

  // Function to update scroll button states
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Initial check
    }
    return () => container?.removeEventListener("scroll", updateScrollButtons);
  }, []);

  // Function to scroll items
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const itemWidth = container.firstChild.clientWidth + 24; // Includes margin spacing
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(updateScrollButtons, 300); // Ensure state updates after animation
    }
  };

  return (
    <section className="relative">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-20 lg:mb-14 md:mb-16">
          Discover your own trends that'll match your dashing looks, straight from the freshly added wardrobe on arrival.
        </p>
      </div>

      {/* Scrollable container wrapper with relative positioning */}
      <div className="relative container mx-auto">
        {/* Buttons Positioned at the Top Right */}
        <div className="absolute -top-15 right-0 flex space-x-2 p-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border bg-white text-black shadow-md transition-all ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            <MdChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border bg-white text-black shadow-md transition-all ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            <MdChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Scrollable content */}
        <div ref={scrollRef} className="flex space-x-6 overflow-x-scroll scrollbar-hide scrollbar-custom scroll-smooth">
          {NewArrivals.map((product) => (
            <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
              <img src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} className="w-full h-[500px] object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="mt-1">${product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
