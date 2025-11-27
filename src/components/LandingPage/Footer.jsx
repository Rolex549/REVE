import React, { useState } from "react";

export default function Footer() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      
      {/* Top Email Subscription */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-2xl font-semibold mb-4">REVE CULT</h1>

        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-12">
          <p className="text-gray-400 mb-2 md:mb-0">
            Receive the latest updates from Reve Cult
          </p>

          <div className="flex items-center bg-gray-900 border border-gray-700 px-3 py-2 rounded-full w-full md:w-64">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent text-white outline-none flex-1"
            />
            <button className="text-white font-semibold">→</button>
          </div>
        </div>

        {/* Middle Section (DESKTOP View) */}
        <div className="hidden md:grid grid-cols-4 gap-12 border-t border-gray-800 pt-10 pb-10">

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>All Products</li>
              <li>Wireless Earbuds</li>
              <li>Sports Collection</li>
              <li>Premium Series</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping Info</li>
              <li>Returns & Exchanges</li>
              <li>Warranty</li>
              <li>Size Guide</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop by Offers</h3>
            <ul className="space-y-2">
              <li>Reve Exclusive Offers</li>
              <li>Festival Deals</li>
              <li>Gift Store</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop by Category</h3>
            <ul className="space-y-2">
              <li>Wireless Earbuds</li>
              <li>Power Bank</li>
              <li>Headphones</li>
              <li>Accessories</li>
            </ul>
          </div>

        </div>

        {/* Mobile Accordion Section */}
        <div className="md:hidden border-t border-gray-800">
          
          {/* Menu 1 */}
          <div onClick={() => toggleMenu(1)} className="py-4 border-b border-gray-800 cursor-pointer">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg">Our Products</h3>
              <span>{openMenu === 1 ? "−" : "+"}</span>
            </div>

            {openMenu === 1 && (
              <ul className="pl-3 mt-3 space-y-2">
                <li>Smart Watches</li>
                <li>Wireless Earbuds</li>
                <li>Headphones</li>
              </ul>
            )}
          </div>

          {/* Menu 2 */}
          <div onClick={() => toggleMenu(2)} className="py-4 border-b border-gray-800 cursor-pointer">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg">About Reve Cult</h3>
              <span>{openMenu === 2 ? "−" : "+"}</span>
            </div>

            {openMenu === 2 && (
              <ul className="pl-3 mt-3 space-y-2">
                <li>Company Info</li>
                <li>Newsroom</li>
                <li>Careers</li>
              </ul>
            )}
          </div>

          {/* Menu 3 */}
          <div onClick={() => toggleMenu(3)} className="py-4 border-b border-gray-800 cursor-pointer">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg">Support</h3>
              <span>{openMenu === 3 ? "−" : "+"}</span>
            </div>

            {openMenu === 3 && (
              <ul className="pl-3 mt-3 space-y-2">
                <li>Help Center</li>
                <li>Track Order</li>
                <li>Warranty</li>
              </ul>
            )}
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
          Copyright © {new Date().getFullYear()} REVE CULT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
