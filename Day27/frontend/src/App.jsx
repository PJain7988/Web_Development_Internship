// import React from 'react';
// import {  Route, Routes, Link } from 'react-router-dom';
// import LandingPage from './pages/landingPage'
// import Login from './pages/login';
// import Signup from './pages/signup';
// import VerifyEmail from './pages/verifyEmail'; 
// import { useAuthStore } from './store/auth'

// function App() {
//   return (
//     <>
//       <div className="p-4 text-center space-x-4">
//         <Link to="/login" className="text-blue-500 text-xl font-bold">Login</Link>
//         <Link to="/signup" className="text-green-500 text-xl font-bold hover:text-green-900 hover:bg-green-400">Sign Up</Link>
//         <Link to="/verifyEmail" className="text-black text-xl font-bold">Verify Email</Link> 
//         <Link to="/landingPage" className="text-black text-xl font-bold">Landing Page</Link> 
//       </div>

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/verifyEmail" element={<VerifyEmail />} /> 
//         <Route path="/landingPage" element={<LandingPage />} /> 
//       </Routes>
//       </>
//   );
// }

// export default App;

import React, { useEffect } from 'react'
import { useAuthStore } from './store/auth'
// import LoadingSpinner from "'/components/LoadingSpinner"
import LandingPage from './pages/landingPage'
import Signup from './pages/signup';
import VerifyEmail from './pages/verifyEmail';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/login";
import ForgetPassword from "./pages/ForgetPassword";

const App = () => {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // if(isCheckingAuth) return <LoadingSpinner />;
  if (isCheckingAuth) return <p>Loading</p>;
  return (
    <>
    <div className="p-4 text-center space-x-4">
        <Link to="/login" className="text-blue-500">Login</Link>
        <Link to="/signup" className="text-green-500">Sign Up</Link>
        <Link to="/verify-email" className="text-black">Verify Email</Link> 
        <Link to="/" className="text-black">Landing Page</Link> 
        <Link to="/forget-password" className="text-black">Forgot Password</Link> 
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={
          isAuthenticated && user?.isVerified ? (
            <Navigate to="/" />
          ) : (
            <Signup />
          )
        } />
        <Route path="/login" element={
          isAuthenticated && user?.isVerified ? (
            <Navigate to="/" />
          ) : (
            <Login />
          )
        } />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
      </>
  )
}

export default App
