import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from "../store/auth";
import toast from "react-hot-toast";

export default function EmailVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const navigate = useNavigate();

  const { verifyEmail , error , isLoading } = useAuthStore();

  const handleChange = (element, index) => {
    const val = element.value.replace(/\D/, ''); // Only numbers
    if (!val) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Move to next input
    if (index < 5 && val) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    alert('Resending OTP...');
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const verificationCode = otp.join("");
    try {
      alert('Verifying OTP: ' + otp.join(''));
      await verifyEmail(verificationCode);
      navigate("/");
      toast.success("Email verified successfully");
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-blue-400 to-blue-500 p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-8 text-center shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-2 text-white">Verify Your Account</h2>
        <p className="text-white mb-6">
          We emailed you the six digit code to <span className="font-medium">personal@email.com</span><br />
          Enter the code below to confirm your email address
        </p>

        <div className="flex justify-between gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => inputs.current[index] = el}
              className="w-12 h-14 text-center text-2xl font-semibold rounded-lg shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold shadow-md transition duration-200"
        >
          VERIFY
        </button>

        <p className="mt-4 text-white">
          If you didn't receive a code !!{' '}
          <button
            onClick={handleResend}
            className="font-bold underline hover:text-purple-200"
          >
            RESEND
          </button>
        </p>
      </div>
    </div>
  );
}