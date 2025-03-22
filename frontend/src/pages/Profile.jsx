import React, { useState } from "react";
import uploadCloud from "../assets/cloud_upload.jpg"; // Default image if no upload

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Shivam",
    lastName: "Lodh",
    email: "slodh079@gmail.com",
    phone: "6000688815",
    altPhone: "8721850345",
    role: "customer",
    birthDate: "2002-10-15",
    gender: "noPreference",
    image: null, // Store uploaded image URL
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageURL });
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      altPhone: "",
      role: "customer",
      birthDate: "",
      gender: "noPreference",
      image: null, // Reset image
    });
  };

  return (
    <div className="w-full mx-auto p-6 shadow-lg rounded-lg" 
    style={{
      boxShadow:
        "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
    }}
    >
      <h2 className="text-2xl font-bold mb-2">Your Personal Information</h2>
      {/* Form */}
      <div className="p-1 lg:py-4 md:p-2 rounded-lg mb-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-15 md:gap-x-5"
        >
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2  rounded"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2  rounded"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2  rounded"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2  rounded"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
              required
            />
          </div>

          {/* Alternative Phone */}
          <div className="mb-4">
            <label className="block text-gray-700">Alternative Phone</label>
            <input
              type="tel"
              name="altPhone"
              value={formData.altPhone}
              onChange={handleChange}
              className="w-full p-2  rounded"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
            />
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2  rounded"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full p-2  rounded text-gray-700 appearance-none focus:outline-none"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2.5  rounded"
              style={{
                boxShadow:
                  "1px -1px 10px 0px #B1C2F4 inset, -1px 3px 9px 0px #C8DBED inset",
              }}
            >
              <option value="noPreference">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
          <p className="block text-gray-700">Profile Upload</p>
          <div className="w-32 h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer">
            
            <label htmlFor="imageUpload" className="w-full h-full flex items-center justify-center">
              {formData.image ? (
                <img src={formData.image} alt="User" className="w-full h-full object-cover" />
              ) : (
                <img src={uploadCloud} alt="Default" className="w-full h-full" />
              )}
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          </div>
          {/* Submit Button */}
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
    </div>
  );
};

export default Profile;
