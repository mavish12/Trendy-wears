import React from 'react'
import { Link } from 'react-router-dom'
import featured from '../../assets/featured.webp'

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-blue-50 rounded-3xl">
            {/* Left Content */}
            <div className="lg:w-1/2 p-8 text-center lg:text-left">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Comfort and Style</h2>
                <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                    Your need for every ocassion
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem facilis illum ea natus consectetur libero debitis incidunt ipsum tenetur illo!
                </p>
                <Link to="/collections/all" className='bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800'>
                Shop Now</Link>
            </div>
            {/* Right Content */}
            <div className="lg:w-1/2 ">
            <img className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl' src={featured} alt="Featured collection" />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection