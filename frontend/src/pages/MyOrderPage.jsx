import React, { useEffect, useState } from "react";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //Fetching orders
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          expectedDeliveryDate: "2024-03-05",
          status: "Shipped",
          shippingAddress: {
            city: "Mumbai",
            country: "India",
            street: "123 Maple Street, Apt 4B, Springfield",
            zipCode: "400001",
          },
          orderItems: [
            {
              name: "product 1",
              image: "https://picsum.photos/500/500?random=1",
              size: "L",
              color: "Black",
              quantity: 2,
              price: 500,
              discount: 10,
              returnable: true,
            },
          ],
          totalPrice: 1000,
          isPaid: false,
        },
        {
          _id: "13445",
          createdAt: new Date(),
          expectedDeliveryDate: "2024-03-05",
          status: "Processing",
          shippingAddress: {
            city: "Delhi",
            country: "India",
            street: "Street 321 Jawahar path, sector 2",
            zipCode: "400201",
          },
          orderItems: [
            {
              name: "product 2",
              image: "https://picsum.photos/500/500?random=2",
              size: "M",
              color: "Red",
              quantity: 1,
              price: 400,
              discount: 0,
              returnable: true,
            },
          ],
          totalPrice: 400,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  return (
    <div className="max-w-auto mx-auto p-4 md:py-6 md:px-0 ">
      <h2 className="text-xl sm:text-2xl font-bold mb-2 pl-5">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-scroll lg:overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr className="text-left">
              <th className="py-2 px-4 sm:py-3 ">Image</th>
              <th className="py-2 px-4 sm:py-3 ">order ID</th>
              <th className="py-2 px-4 sm:py-3 ">Ordered At</th>
              <th className="py-2 px-4 sm:py-3 ">Items </th>
              <th className="py-2 px-4 sm:py-3 ">Size </th>
              <th className="py-2 px-4 sm:py-3 ">Colour </th>
              <th className="py-2 px-4 sm:py-3 ">Quantity </th>
              <th className="py-2 px-4 sm:py-3 ">Price</th>
              <th className="py-2 px-4 sm:py-3 ">Total</th>
              <th className="py-2 px-4 sm:py-3 ">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3 ">Status </th>
              <th className="py-2 px-4 sm:py-3 ">Delivery By</th>
              <th className="py-2 px-4 sm:py-3 ">Payment </th>
              <th className="py-2 px-4 sm:py-3 ">Returnable</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="p-2 sm:p-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700 ">
                    <span>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                    <br />
                    <span className="text-xs text-gray-400">
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    {order.orderItems.length}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    {order.orderItems[0].size}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    {order.orderItems[0].color}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    {order.orderItems[0].quantity}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    $ {order.orderItems[0].price}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    $ {order.orderItems[0].price * 2 - 10}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    {order.shippingAddress ? (
                      <>
                        <span>
                          {order.shippingAddress.street}, <br />
                        </span>
                        <span>
                          {order.shippingAddress.city},{" "}
                          {order.shippingAddress.zip},{" "}
                          {order.shippingAddress.country}
                        </span>
                      </>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">{order.status}</td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    <span>
                      {new Date(
                        new Date().setDate(new Date().getDate() + 5)
                      ).toLocaleDateString()}
                    </span>
                    <br />
                    <span className="text-xs text-gray-400">
                      {new Date(
                        new Date().setDate(new Date().getDate() + 5)
                      ).toLocaleDateString("en-US", { weekday: "long" })}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    {order.isPaid === true ? (
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                        Prepaid
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="p-2 sm:p-4 text-gray-700">
                    {order.orderItems[0].returnable === true ? "Yes" : "No"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="100%" className="text-center py-4">
                  No items found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
