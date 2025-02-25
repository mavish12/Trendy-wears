import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'

const placeholderProducts = [
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

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>
        {/* Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails/>

        <div className="container mx-auto ">
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears for Women
          </h2>
          <ProductGrid products={placeholderProducts}/>
        </div>
    </div>
  )
}

export default Home