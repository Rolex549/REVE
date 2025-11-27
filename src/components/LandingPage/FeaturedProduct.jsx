import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/TWS 600(3) original.png";
import img2 from "../../assets/TWS 600(2) original.png";
import img3 from "../../assets/TWS 600 (1) original.png";
import img4 from "../../assets/SOUL(2) original.png";
import img5 from "../../assets/REVE TONE Cyan.png";
import img6 from "../../assets/hero woman.png";
import img7 from "../../assets/hero woman-3.png";

import img9 from "../../assets/earbuds2.png";
import img10 from "../../assets/BUDS TONE white.png";
import img11 from "../../assets/BUDS TONE original.png";
import img12 from "../../assets/BUDS TONE black original.png";

// 👉 Copy the products array from Products.jsx and paste it here:
const products = [
  {
    id: 1,
    name: "TWS 600",
    colors: [
      { name: "Blue", hex: "#4A90E2", image: img1 },
      { name: "Black", hex: "#1a1a1a", image: img2 },
      { name: "White", hex: "#F5F5F5", image: img3 },
    ],
    rating: 4.6,
    reviews: 2847,
    salePrice: 999,
    features: ["Active Noise Cancellation", "40H Playback", "Fast Charging"]
  },
  {
    id: 2,
    name: "TWS 600",
    colors: [
      { name: "Blue", hex: "#4A90E2", image: img4 },
      { name: "Black", hex: "#1a1a1a", image: img5 },
      { name: "White", hex: "#F5F5F5", image: img6 },
    ],
    rating: 4.6,
    reviews: 2847,
    salePrice: 999,
    features: ["Active Noise Cancellation", "40H Playback", "Fast Charging"]
  },
  {
    id: 3,
    name: "SOUL",
    colors: [
      { name: "Navy", hex: "#001F3F", image: img10 },
      { name: "Black", hex: "#1a1a1a", image: img7 },
    ],
    rating: 4.5,
    reviews: 1892,
    salePrice: 999,
    features: ["Premium Bass", "35H Battery Life", "Voice Assistant"]
  },
  {
    id: 4,
    name: "BUDS TONE",
    colors: [
      { name: "Cream", hex: "#F5E6D3", image: img9 },
      { name: "Black", hex: "#1a1a1a", image: img10 },
      { name: "Cyan", hex: "#00FFFF", image: img11 },
      { name: "white", hex: "#F5F5F5", image: img12 }
    ],
    rating: 4.7,
    reviews: 4163,
    salePrice: 1499,
    features: ["Spatial Audio", "Transparency Mode", "Wireless Charging"]
  },

];

export default function FeaturedProduct() {
  return (
    <div className="w-full max-h-800 mt-10  px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Recommended</h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <motion.div
            key={item.id}
            className="group p-6 rounded-xl border bg-white transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* IMAGE + SHADOW */}
            <div className="relative w-full h-60 flex justify-center items-center">
              <div className="absolute bottom-0 w-32 h-3 bg-gray-300 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300 blur-md"></div>

              <img
                src={item.colors[0].image}
                alt={item.name}
                className="w-full h-40 object-contain mb-6 transform transition-all duration-300 group-hover:-translate-y-2"
              />
            </div>

            {/* Color Label */}
            <p className="text-sm font-semibold">
              Color: <span className="font-normal">{item.colors[0].name}</span>
            </p>

            {/* Color Circles */}
            <div className="flex gap-3 my-3">
              {item.colors.map((clr, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border cursor-pointer 
                 transition-all duration-300 transform hover:scale-125"
                  style={{ background: clr.hex }}
                ></div>
              ))}
            </div>


            {/* Name */}
            <p className="text-lg font-semibold leading-tight">{item.name}</p>

            {/* PRICE → Hides on hover */}
            {/* PRICE → Hides on hover */}
            <p className="text-md font-semibold mt-2 group-hover:hidden transition-all">
              ₹{item.salePrice}
            </p>

            {/* ADD TO CART → Shows on hover */}
            <button className="hidden group-hover:block w-full mt-2 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-black hover:text-white">
              ADD TO CART
            </button>

          </motion.div>


        ))}
      </div>
    </div>
  );
}
