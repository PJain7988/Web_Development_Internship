import React from 'react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '₹2,999',
    image: 'https://via.placeholder.com/300x300.png?text=Product+1',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '₹1,999',
    image: 'https://via.placeholder.com/300x300.png?text=Product+2',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: '₹1,499',
    image: 'https://via.placeholder.com/300x300.png?text=Product+3',
  },
  {
    id: 4,
    name: 'Fitness Tracker',
    price: '₹999',
    image: 'https://via.placeholder.com/300x300.png?text=Product+4',
  },
];

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="shadow sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">ShopEase</h1>
          <div className="flex items-center space-x-4 text-lg">
            <span role="img" aria-label="search" className="cursor-pointer">🔍</span>
            <span role="img" aria-label="user" className="cursor-pointer">👤</span>
            <span role="img" aria-label="cart" className="cursor-pointer">🛒</span>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Big Sale is On! 🛍️</h2>
        <p className="text-lg mb-6">Up to 70% off on trending gadgets.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      <main className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-full h-56 object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">{product.name}</h4>
              <p className="text-blue-600 font-bold mb-2">{product.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 py-6 mt-10">
        <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
          © 2025 ShopEase. All rights reserved.
        </div>
      </footer>
    </div>
  );
}