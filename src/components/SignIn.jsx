import React from "react";
import { useState, useRef } from "react";
import { X } from "lucide-react";

const SignIn = ({onClose}) => {

    const [formData, setFormData] = useState({ username: '', password: '' });
    const modalRef = useRef();

    const closeModal = (e) => {
      if(modalRef.current === e.target){
        onClose();
      }
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
  return (
<div ref={modalRef} onClick={closeModal} className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg px-8 py-2 pb-8 max-w-md w-full space-y-6">
      <button onClick={onClose} className=" text-gray-600 hover:text-gray-800 left-full relative">
            <X />
      </button>
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign In</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
