import React, { useEffect, useState } from "react";
import { HiMinusSm } from "react-icons/hi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { toast } from "sonner";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "A stylish jacket for men in ocassional purpose.",
  brand: "ZARA",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "White", "Red"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 1",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddTocart = () => {
    if (!selectedSize && !selectedColor) {
      toast.error("Please select a size and colour before adding to cart.", {
        duration: 1000,
      });
      return;
    } else if (!selectedSize) {
      toast.error("Please select a size before adding to cart.", {
        duration: 1000,
      });
      return;
    } else if (!selectedColor) {
      toast.error("Please select a colour before adding to cart.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  return (
    <div className="p-2 md:p-6 lg:p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Small Images */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-3 ${
                  mainImage === image.url
                    ? "border-black/70"
                    : "border-gray-400"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="MAin Product"
                className="w-full h-auto md:h-[490px] lg:h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Small Images */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-3 ${
                  mainImage === image.url
                    ? "border-black/70"
                    : "border-gray-400"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            {/* <div className="flex flex-col md:flex-row md:gap-20"> */}
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `$ ${selectedProduct.originalPrice}`}
            </p>
            <p className="text-lg text-gray-500 mb-2">
              $ {selectedProduct.price}
            </p>
            {/* </div> */}
            <p className="text-lg text-gray-600 mb-4">
              {selectedProduct.description}
            </p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    onClick={() => setSelectedColor(color)}
                    key={color}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.7)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded border cursor-pointer hover:bg-black/80 hover:text-white transition-all ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 mb-2">Quantity:</p>
              <div className="flex items-center space-x-4 mb-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="p-3 bg-black/80 text-white rounded text-lg hover:bg-black"
                >
                  <HiMinusSm />
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="p-3 bg-black/80 text-white rounded text-lg hover:bg-black"
                >
                  <HiOutlinePlusSm />
                </button>
              </div>
            </div>
            <button
              onClick={handleAddTocart}
              disabled = {isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4  ${isButtonDisabled ? "bg-black/40 cursor-not-allowed" : "hover:bg-black/80"}`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characterstics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
