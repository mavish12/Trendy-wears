import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {

    const orders = [
        {
            "_id": 123123,
            user:{
                name: "John Doe",
            },
            status:"Processing",
            totalPrice: 100.00
            
        },
        {
            "_id": 123098,
            user:{
                name: "Subham Roy",
            },
            status:"Processing",
            totalPrice: 324.00
            
        },
        {
            "_id": 343123,
            user:{
                name: "Isack Paul",
            },
            status:"Shipped",
            totalPrice: 240.00
            
        },
        {
            "_id": 139823,
            user:{
                name: "Riya Sharma",
            },
            status:"Delivered",
            totalPrice: 109.00
            
        },
    ]
  return (
    <div className='w-full mx-auto p-6'>
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className="p-4 shadow-md rounded-lg w-full bg-blue-200 border-3 border-blue-500">
                <h2 className='text-xl font-semibold'>Revenue</h2>
                <p className='text-3xl font-bold pt-2 text-blue-700'>$10000</p>
            </div>
            <div className="p-4 shadow-md rounded-lg w-full bg-pink-100 border-3 border-pink-500">
                <h2 className='text-xl font-semibold'>Total Orders</h2>
                <p className='text-3xl font-bold pt-2 text-pink-700'>200</p>
                <Link to='/admin/orders' className='text-blue-500 hover:underline'>Manage Orders</Link>
            </div>
            <div className="p-4 shadow-md rounded-lg w-full bg-green-200 border-3 border-green-500">
                <h2 className='text-xl font-semibold'>Total Products</h2>
                <p className='text-3xl font-bold pt-2 text-green-700'>100</p>
                <Link to='/admin/products' className='text-blue-500 hover:underline'>Manage Products</Link>
            </div>
        </div>
        {/* Recent Orders */}
        <div className="mt-6 ">
            <h2 className="text-2xl font-bold mb-4">
                Recent Orders
            </h2>
            <div className="overflow-x-auto">
                <table className='min-w-full text-left'>
                    <thead className='bg-gray-100 text-gray-700 uppercase text-sm'>
                        <tr>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">User</th>
                            <th className="py-3 px-4">Total Price</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) =>(
                                <tr key={order._id} className='border-b border-b-gray-200 hover:bg-gray-50 cursor-pointer'>
                                    <td className='p-4'>{order._id}</td>
                                    <td className='p-4'>{order.user.name}</td>
                                    <td className='p-4'>{order.totalPrice}</td>
                                    <td className='p-4'>{order.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className='p-4 text-center text-gray-500'>No Orders Recieved Recently</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AdminHomePage