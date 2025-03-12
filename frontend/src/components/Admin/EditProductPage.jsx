import React, { useState } from 'react'

const EditProductPage = () => {

    const [productData, setProductData] = useState({
        name: '',
        price: 0,
        description: '',
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        gender: "",
        images: [
            {
                url: "https://picsum.photos/150?random=1"
            },
            {
                url: "https://picsum.photos/150?random=2"
            },
        ]

    })

    const handleEditChange = (e) =>{
        const { name, value} = e.target;
        setProductData((prevData) => ({...prevData, [name]: value}))
    }

    const handleImageUpload = async(e) =>{
        const file = e.target.files[0];
        console.log(file)
    }

    const handleProductEditSubmit = (e) =>{
        e.preventDefault();
        console.log(productData)
    }
  return (
    <div className='w-full mx-auto p-6 shadow-md rounded-md'>
        <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
        <form onSubmit={handleProductEditSubmit}>
            {/* Name */}
            <div className="mb-6">
                <label className='block font-semibold mb-2'>Product Name</label>
                <input type="text" name='name' value={productData.name} onChange={handleEditChange} className='w-full border border-gray-300 rounded p-2' required/>
            </div>
            
            {/* Description */}
            <div className="mb-6">
                <label className='block font-semibold mb-2'>Description</label>
                <textarea type="text" name='description' value={productData.description} onChange={handleEditChange} rows={4} className='w-full border border-gray-300 rounded p-2' required/>
            </div>
            
            {/* Price */}
            <div className="mb-6">
                <label className='block font-semibold mb-2'>Price</label>
                <input type="number" name='price' value={productData.price} onChange={handleEditChange} className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* Count In Stock */}
            <div className="mb-6">
                <label className='block font-semibold mb-2'>Count In Stock</label>
                <input type="number" name='countInStock' value={productData.countInStock} onChange={handleEditChange} className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* SKU */}
            <div className="mb-6">
                <label className='block font-semibold mb-2'>SKU</label>
                <input type="number" name='sku' value={productData.sku} onChange={handleEditChange} className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* Price */}
            <div className="mb-6">
                <label className='block font-semibold mb-2'>Sizes (comma-seperated)</label>
                <input type="text" name='sizes' value={productData.sizes.join(", ")} onChange={(e) => setProductData({
                    ...productData, sizes: e.target.value.split(",").map((size) => size.trim())
                })} className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* Colors */}
            <div className="mb-6">
                <label className='block font-semibold mb-2'>Colours (comma-seperated)</label>
                <input type="text" name='colors' value={productData.colors.join(", ")} onChange={(e) => setProductData({
                    ...productData, colors: e.target.value.split(",").map((color) => color.trim())
                })} className='w-full border border-gray-300 rounded p-2'/>
            </div>

            {/* Image Upload */}
            <div className="mb-6">
            <label className='block font-semibold mb-2'>Upload Image</label>
            <input type="file" onChange={handleImageUpload} className='border'/>
            <div className="flex gap-4 mt-4">
                {productData.images.map((image, index) => (
                    <div key={index}>
                        <img src={image.url} alt={image.altName || "Product Image"} className="w-20 h-20 rounded-lg
                        object-cover"/>
                    </div>    
                ))}
            </div>
            </div>
            <button type='submit' className='w-full bg-green-500 text-white py-2  rounded-md hover:bg-green-600 transition-colors'>Update product</button>
        </form>
    </div>
  )
}

export default EditProductPage