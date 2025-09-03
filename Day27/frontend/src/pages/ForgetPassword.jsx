import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import toast from 'react-hot-toast';

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const { forgetPassword, error, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      await forgetPassword(email);
      toast.success("OTP sent to your email");
      navigate("/verify-email");
    } catch (err) {
      toast.error("Failed to send OTP");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-blue-400 to-blue-500 p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 text-center shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-white">Forgot Your Password?</h2>
        <p className="text-white mb-6">
          Enter your registered email address and we'll send you an OTP to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold shadow-md transition duration-200"
          >
            {isLoading ? "Sending OTP..." : "SEND OTP"}
          </button>
        </form>

        {error && <p className="text-red-200 mt-2">{error}</p>}
      </div>
    </div>
  );
}
