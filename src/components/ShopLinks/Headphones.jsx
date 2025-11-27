import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import image10 from '../../assets/TWS 600 (1) original.png'
import image30 from '../../assets/SOUL original.jpg';
import image40 from '../../assets/BUDS TONE original.png';
import image110 from '../../assets/TWS 600(2) original.png';
import image120 from '../../assets/TWS 600(3) original.png';
import image310 from '../../assets/SOUL(2) original.png';
import image410 from '../../assets/BUDS TONE black original.png';
import image420 from '../../assets/REVE TONE Cyan.png';
import image430 from '../../assets/BUDS TONE white.png';


export default function Headphones() {
  const products = [
    {
      name: "REVE Earbuds – Blush Pink",
      price: "₹2,499",
      img: image10,
    },
    {
      name: "REVE Earbuds – Soft Lavender",
      price: "₹2,799",
      img: image30,
    },
    {
      name: "REVE Earbuds – Snow White",
      price: "₹2,599",
      img: image40,
    },
    {
      name: "REVE Earbuds – Rose Gold",
      price: "₹2,999",
      img: image110,
    },
    {
      name: "REVE Earbuds – Sky Mint",
      price: "₹2,899",
      img: image120,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* 🔥 AESTHETIC HEADER BANNER */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-tr from-[#EDE9FF] via-[#FFE8F7] to-[#F7F4FF] overflow-hidden">

        {/* Soft Glow Background Shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-300 opacity-20 blur-[200px] rounded-full"></div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Headphones by <span className="text-purple-600">REVE CULT</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aesthetic. Soft. Feminine. Designed for modern women who love identity in technology.
        </motion.p>

        <motion.div
          className="relative z-10 mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={image430} 
            alt="Headphones Banner"
            className="w-[350px] md:w-[460px] drop-shadow-2xl"
          />
        </motion.div>

      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Choose Your Aesthetic 🎧
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden border bg-white shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.04 }}
            >
              <div className="bg-[#F7F4FF] p-8 flex justify-center">
                <img src={item.img} alt={item.name} className="w-40 h-40 object-contain" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 mt-1">{item.price}</p>
                <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white w-full py-3 rounded-full font-medium hover:opacity-90 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRAND STORY SECTION */}
      <section className="px-6 py-24 bg-gradient-to-r from-[#F6F4FF] to-[#FFE8F7]">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h2
            className="text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Aesthetic Sound Designed for Her
          </motion.h2>

          <motion.p
            className="text-gray-600 mt-6 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Every REVE CULT headphone is shaped with softness, identity,
            and feminine comfort in mind.  
            Smooth pastel colors, minimal curves & a vibe you can feel.
          </motion.p>

          <motion.p
            className="text-gray-700 mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            🎀 *Her vibe. Her sound. Her identity.*
          </motion.p>
        </div>
      </section>

    </div>
  );
}
