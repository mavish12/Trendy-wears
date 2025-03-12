import React from 'react'

const OrderManagement = () => {
    const orders = [
        {
          _id: 1234321234,
          user:{
            name: 'John Doe',
          },
          totalPrice: 110,
          status: "Processing",
        },
      ];

      const handleStatusChange = (orderId, status) =>{
        console.log({id: orderId, status});
      }
  return (
    <div className='w-full p-6 mx-auto'>
        <h2 className="text-2xl font-bold mb-6">
            Order Management
        </h2>
        <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-4">Order Id</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price (₹)</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-b-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-bold whitespace-nowrap text-gray-900">
                    #{order._id}
                  </td>
                  <td className="p-4">{order.user.name}</td>

                  <td className="p-4">{order.totalPrice}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="p-2.5 text-sm border rounded bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 black"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="py-2 px-4
                                        rounded bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                    >
                      Order is Delivered
                    </button>
                  </td>
                  {/* <td className='p-4'>{order.status}</td>  */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default OrderManagement