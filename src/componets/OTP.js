import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ResetPassword } from "./ResetPassword";

export function Otp() {
  const [resetToken, setResetToken] = useState(""); // Updated state variable name

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    setResetToken(e.target.resetToken.value.trim()); // Updated name to resetToken and added trim()

    // Redirect to the ResetPassword route with the resetToken as a route parameter
    navigate(`/reset/${resetToken}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="resetToken" // Updated name to resetToken
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resetToken" // Updated to resetToken
              type="text"
              placeholder="Enter the code"
            />
          </div>
          <div className="mb-6"></div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
      </div>
      {/* Conditionally render ResetPassword component */}
      {resetToken && <ResetPassword resetToken={resetToken} />} {/* Pass resetToken as a prop */}
    </div>
  );
}
