import React, { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 123432,
      name: "John Doe",
      email: "john.doe@example",
      role: "admin",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer", //By Default
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });
  };

  const handleRoleChange = (userId, newRole) => {
    console.log({
      id: userId,
      role: newRole,
    });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you to delete this User?")) {
      console.log("Deleting User with ID", userId);
    }
  };
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      {/* Form */}
      <div className="p-1 lg:p-6 md:p-2 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-15 md:gap-x-5"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2.5 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="py-2 px-18 md:px-20 rounded bg-green-500 hover:bg-green-600 text-white cursor-pointer"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
      {/* User List */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-4">username</th>
              <th className="py-3 px-4">E-mail</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-b-gray-200 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="p-2 border rounded"
                    >
                      <option value="customer">Customer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="py-2 px-4
                                        rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                  {/* <td className='p-4'>{order.status}</td>  */}
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
  );
};

export default UserManagement;
