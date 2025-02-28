import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {

    const [products, setProducts] = useState([])
    const sidebarRef = useRef(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleClickOutside = (e) =>{
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
            setIsSidebarOpen(false)
        }
    }

    useEffect(() =>{
        // Event listener for closing sidebar even when clicked anywhere outside
        document.addEventListener("mousedown", handleClickOutside)
        //Clean event listner
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            }
    })

    useEffect(()=>{
        setTimeout(()=>{
            const fetchedProducts = [
                {
                  _id: 1,
                  name: "Stylish T-Shirt",
                  price: 80,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=11",
                      altText: "Stylish T-Shirt 1",
                    },
                  ],
                },
                {
                  _id: 2,
                  name: "Stylish Jacket",
                  price: 180,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=12",
                      altText: "Stylish Jacket",
                    },
                  ],
                },
                {
                  _id: 3,
                  name: "Party Blazer",
                  price: 210,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=13",
                      altText: "Party Blazer",
                    },
                  ],
                },
                {
                  _id: 4,
                  name: "Beach Shirt",
                  price: 50,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=14",
                      altText: "Beach Shirt",
                    },
                  ],
                },
                {
                  _id: 5,
                  name: "Beach Shirt",
                  price: 50,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=7",
                      altText: "Beach Shirt",
                    },
                  ],
                },
                {
                  _id: 6,
                  name: "Beach Shirt",
                  price: 50,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=8",
                      altText: "Beach Shirt",
                    },
                  ],
                },
                {
                  _id: 7,
                  name: "Beach Shirt",
                  price: 50,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=9",
                      altText: "Beach Shirt",
                    },
                  ],
                },
                {
                  _id: 8,
                  name: "Beach Shirt",
                  price: 50,
                  // originalPrice: 100,
                  // description: "A stylish t-shirt for men in casual purpose.",
                  // brand: "ZARA",
                  // material: "Cotton",
                  // sizes: ["S", "M", "L", "XL"],
                  // colors: ["Black", "White", "Red"],
                  images: [
                    {
                      url: "https://picsum.photos/500/500?random=10",
                      altText: "Beach Shirt",
                    },
                  ],
                },
              ];
        setProducts(fetchedProducts)
        }, 1000)
    }, [])

  return (
    <div className='flex flex-col lg:flex-row'>
        {/* Mobile Filter button */}
        <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
        <FaFilter className='mr-2'/> Filter
        </button>
        {/* Filter sidebar */}
        <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
            <FilterSidebar />
        </div>
        <div className="flex-grow p-4 ">
            <h2 className="text-2xl uppercase mb-4">All Collection</h2>
            {/* Sort Options */}
            <SortOptions/>
            {/* Product Grid */}
            <ProductGrid products={products}/>
        </div>
    </div>
  )
}

export default CollectionPage