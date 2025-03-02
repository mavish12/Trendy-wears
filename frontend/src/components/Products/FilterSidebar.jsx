import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  //To read and modify the query parameters
  //any.com/?a=1&b=2
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: [],
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Grey",
    "Brown",
    "Pink",
    "Beige",
    "Navy",
    "Purple",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Polyester",
    "Rayon",
    "Linen",
    "Silk",
    "Wool",
    "Leather",
    "Denim",
    "Fleece",
    "Viscose",
  ];
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Under Armour",
    "Levis",
    "Gucci",
    "Louis Vuitton",
    "Versace",
    "Dior",
    "Armani",
    "Calvin Klein",
  ];
  const genders = ["Men", "Women", "Kids"];

  useEffect(() => {
    //To convert the datas from the useSearchParams to plain Object
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color ? params.color.split(",") : [],
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e, type = null) => {
    let { name, value, checked } = e.target;
    let newFilters = { ...filters };
  
    if (type === "color") {
      // Handle color button clicks (toggle selection)
      newFilters[name] = newFilters[name].includes(value)
        ? newFilters[name].filter((item) => item !== value) // Remove if already selected
        : [...newFilters[name], value]; // Add if not selected
    } else if (e.target.type === "checkbox") {
      // Handle checkbox selections
      newFilters[name] = checked
        ? [...(newFilters[name] || []), value]
        : newFilters[name].filter((item) => item !== value);
    } else {
      // Handle radio buttons and other inputs
      newFilters[name] = value;
    }
  
    setFilters(newFilters);
    updateUrlParams(newFilters)
    console.log(newFilters);
  };
  
  const updateUrlParams = (newFilters) =>{
    const params = new URLSearchParams();
    //{category: "Top Wear", size: ["XS","L"]}
    Object.keys(newFilters).forEach((key)=> {
        if(Array.isArray(newFilters[key]) && newFilters[key].length > 0){
            params.append(key, newFilters[key].join(",")) // "XS,L"
        }else if(newFilters[key]){
            params.append(key, newFilters[key]) // "Top Wear"   
        }
    })
    setSearchParams(params)
    navigate(`?${params.toString()}`) //?category=Bottom+Wear&size=XS%2CS
  }

  const handlePriceChange = (e) =>{
    const newPrice = e.target.value;
    setPriceRange([0, newPrice])
    const newFilters = {...filters, minPrice:0, maxPrice:newPrice}
    setFilters(filters)
    updateUrlParams(newFilters)
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>
      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Colour</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={(e) => handleFilterChange(e, "color")}
              className={`border border-gray-300 rounded-full w-8 h-8 cursor-pointer transition hover:scale-105 ${
                filters.color.includes(color) ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range ($)
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
