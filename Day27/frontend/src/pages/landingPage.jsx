import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="text-2xl font-bold">uizard<span className="text-blue-500">.</span></div>
        <ul className="flex gap-6 text-sm text-gray-600 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Product</li>
          <li className="hover:text-blue-500 cursor-pointer">AI Design</li>
          <li className="hover:text-blue-500 cursor-pointer">Templates</li>
          <li className="hover:text-blue-500 cursor-pointer">Solutions</li>
          <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          <li className="hover:text-blue-500 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact sales</li>
          <li className="hover:text-blue-500 cursor-pointer">Log in</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">Sign up for free</button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            The best way <br /> to showcase your project.
          </h1>
          <p className="text-gray-600 mt-4">
            Here you can put a short description about your project...
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Try for free</button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100">See how it works</button>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="w-[300px] h-[300px] bg-gradient-to-tr from-yellow-400 via-purple-400 to-blue-500 rounded-2xl flex items-end justify-center">
            <div className="w-10 h-10 bg-yellow-400 rounded-full m-1"></div>
            <div className="w-10 h-14 bg-purple-400 rounded-full m-1"></div>
            <div className="w-10 h-20 bg-blue-500 rounded-full m-1"></div>
          </div>
        </div>
      </section>

      {/* Template Preview */}
      <section className="px-8 py-8 bg-white">
        <h2 className="text-xl font-semibold mb-4">Popular Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow-lg p-4 rounded-xl border">
            <img src="https://via.placeholder.com/200x120" alt="Ecommerce dashboard" className="rounded-md mb-2" />
            <h3 className="font-medium">Ecommerce dashboards</h3>
          </div>
          <div className="shadow-lg p-4 rounded-xl border">
            <img src="https://via.placeholder.com/200x120" alt="Elearning" className="rounded-md mb-2" />
            <h3 className="font-medium">Elearning website</h3>
          </div>
          <div className="shadow-lg p-4 rounded-xl border">
            <img src="https://via.placeholder.com/200x120" alt="Other template" className="rounded-md mb-2" />
            <h3 className="font-medium">Other template</h3>
          </div>
        </div>
      </section>
    </div>
  );
}