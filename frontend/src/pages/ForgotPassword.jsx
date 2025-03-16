import React, { useState } from 'react'
import { Link } from "react-router-dom";
import register from "../assets/register.webp"

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleNewPasswordSubmit = (e) =>{
        e.preventDefault();
        console.log("User Registered", {name, email, password})
      }
    

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit={handleNewPasswordSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
            <div className="flex justify-center mb-6">
                <h2 className="text-xl font-medium">INYLE</h2>
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Oops You Forgot Your Password! 🥲</h2>
            <p className="text-center mb-6">
                Change Your Password for INYLE 
            </p>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter your Email address"/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">New Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter New Password"/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Retype New Password</label>
                <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} className="w-full p-2 border rounded" placeholder="Enter New Password again"/>
            </div>
            <button type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                Change Password
            </button>
            <p className="mt-6 text-center text-sm">
                Remember Password? {" "}
                <Link to="/login" className="text-blue-500 ">Login</Link>
            </p>
        </form>
      </div>
      {/* Right side image */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
            <img src={register} alt="Login to account" className="h-[750px] w-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword