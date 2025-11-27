import React from "react";

import img1 from "../../assets/TWS 600(3) original.png";
import img2 from "../../assets/TWS 600 (1) original.png";
import img3 from "../../assets/TWS 600(2) original.png";


export default function Trending() {

  // FULL DATA OF ALL BANNERS
  const banners = [
    {
      image: img1,
      label: "Exclusive Color Drop",
      title: "Moonlight Grey",
      subtitle: "Limited Edition Quiet Comfort Headphones",
      button: "Shop Now"
    },
    {
      image: img2,
      label: "Premium Edition",
      title: "Shadow Black",
      subtitle: "Crafted for immersive sound and comfort",
      button: "Discover"
    },
    {
      image: img3,
      label: "New Launch",
      title: "Arctic White",
      subtitle: "Experience clarity and power like never before",
      button: "Buy Now"
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2">

      {banners.map((item, index) => (
        <div 
          key={index}
          className="relative w-full h-[100vh] overflow-hidden mb-10"
        >
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />

          {/* Soft Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* TEXT SECTION */}
          <div className="absolute bottom-14 right-10 text-white max-w-md">
            
            {/* LABEL */}
            <p className="text-sm tracking-widest opacity-80 mb-2">
              {item.label}
            </p>

            {/* TITLE */}
            <h1 className="text-4xl font-extrabold leading-tight mb-2">
              {item.title}
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg opacity-90 mb-6">
              {item.subtitle}
            </p>

            {/* BUTTON */}
            <button className="px-6 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition">
              {item.button}
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}
