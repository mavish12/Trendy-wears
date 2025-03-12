import React from 'react'
import { Link } from 'react-router-dom'

const ProductManagement = () => {

    const products = [
        {
            _id: 123432,
            name:"Shirt",
            price: 120,
            sku: "123456543"
        }
    ]

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure you want to delete the product?")){
        console.log("Delete Product with ID", id)

        }
    }
  return (
    <div className='w-full mx-auto p-6'>
        <h2 className="text-2xl font-bold mb-6">
            Product Management
        </h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Sku</th>
              <th className="py-3 px-4">Edit </th>
              <th className="py-3 px-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-b-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className='p-4'>
                    <Link to={`/admin/products/${product._id}/edit`} className='bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600'>Edit</Link> 
                  </td> 
                  <td className="p-4">
                  <button onClick={() => handleDelete(product._id)} className='bg-red-500 text text-white px-2 py-1 rounded hover:bg-red-600'>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No Orders Recieved Recently
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default ProductManagement