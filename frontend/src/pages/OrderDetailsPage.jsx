import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const OrderDetailsPage = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null)

    useEffect(() =>{
        const mockOrderDetails = {
            _id: id,
            createdAt: new Date(),
            isPaid: true,
            isDelivered: false,
            paymentMethod: "PayPal",
            shippingMethod: "Standard",
            shippingAddress: {city: "Bangalore", country:"India"},
            orderItems: [
                {
                    productId: "1",
                    name: "Jacket",
                    price : 120,
                    quantity: 1,
                    image: "https://picsum.photos/150?random=1"
                },
                {
                    productId: "2",
                    name: "Shirt",
                    price : 60,
                    quantity: 2,
                    image: "https://picsum.photos/150?random=2"
                }
            ]
        }
        setOrderDetails(mockOrderDetails)
    }, [id])
  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
        {!orderDetails ? (
            <p>No order details found</p>
        ):(
            <div className='p-4 sm:p-6 rounded-lg border'>
                {/* Order Info */}
                <div className="flex flex-col sm:flex-row justify-between mb-8">
                    <div>
                        <h3 className='text-lg md:text-xl font-semibold'>
                            Order ID: #{orderDetails._id}
                        </h3>
                        <p className='text-gray-600'>
                            {new Date(orderDetails.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className='flex flex-col items-start sm:items-end mt-4 sm:mt-0'>
                        <span className={`${orderDetails.isPaid ? "bg-green-100 text-green-600" : "bg-red-100 text-red-700 "} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isPaid? "Approved" : "Pending"}</span>
                        <span className={`${orderDetails.isDelivered ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-700 "} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{orderDetails.isDelivered? "Delivered" : "Delivery Pending"}</span>
                    </div>
                </div>
                {/* Customer payment and shipping info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    <div className="">
                        <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                        <p className=''>Payment Method: {orderDetails.paymentMethod}</p>
                        <p>Status: {orderDetails.isPaid ? "Paid " : "Unpaid"}</p>
                    </div>
                    <div className="">
                        <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
                        <p className=''>Shipping Method: {orderDetails.shippingMethod}</p>
                        <p>Address: {" "} {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}</p>
                    </div>
                </div>
                {/* Product List */}
                <div className="overdlow-x-auto">
                    <h4 className="text-lg font-semibold mb-4">
                        Products
                    </h4>
                    <table className='min-w-full text-gray-600 mb-4'>
                        <thead className="bg-gray-100">
                            <tr>
                            {/* <th className='py-2 px-4'>Product</th> */}
                                <th className='py-2 px-4'>Name</th>
                                <th className='py-2 px-4'>Unit</th>
                                <th className='py-2 px-4'>Quantity</th>
                                <th className='py-2 px-4'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.orderItems.map((product)=>(
                                <tr key={product.productId} className="border-b border-gray-200">
                                    <td className="py-2 px-4 flex items-center">
                                        <img src={product.image} alt={product.name} className='w-20 h-20 rounded-lg object-cover mr-4'/>
                                        <Link to={`/product/${product.productId}`} className='text-blue-500 hover:underline'>{product.name}</Link>
                                    </td>
                                    <td className="py-2 px-4">$ {product.price}</td>
                                    <td className="py-2 px-4">{product.quantity}</td>
                                    <td className="py-2 px-4">$ {product.price * product.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Back to Orders Link */}
                <button className='bg-black/80 py-2 px-6 rounded-lg'> 
                <Link to="/my-orders" className='text-white hover:underline'>Back to My Orders</Link>
                </button>
            </div>
        )}
    </div>
  )
}

export default OrderDetailsPage