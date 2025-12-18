import React from "react";
import { BadgeCheck, Truck, HeadphonesIcon, UserCircle2, Sparkles, Waves, BatteryFull, Wifi } from "lucide-react";
// import { Certificate, Storefront, Truck, Headset } from "phosphor-react";


export default function TrustBadges() {
  const features = [
    {
      icon: <BadgeCheck size={40} strokeWidth={1.5} />,
      title: "100% Genuine REVE CULT Products",
      desc: "Shop confidently knowing every REVE CULT product is original and directly sourced, with full authenticity guaranteed.",
    },
    {
      icon: <UserCircle2 size={40} strokeWidth={1.5} />,
      title: "Officially Authorized ",
      desc: "REVE CULT is an officially authorized, ensuring genuine products and full warranty eligibility.",
    },
    {
      icon: <Truck size={40} strokeWidth={1.5} />,
      title: "Fast & Secure Shipping",
      desc: "Receive your REVE CULT products quickly and safely with our fast, tracked delivery service, ensuring they arrive in perfect condition every time.",
    },
    {
      icon: <HeadphonesIcon size={40} strokeWidth={1.5} />,
      title: "Order Support",
      desc: "Get reliable support on your order status, tracking, and queries right up to your delivery.",
    },
    {
      icon: <Sparkles size={40} strokeWidth={1.5} />,
      title: "Elegant Design",
      desc: "Crafted to complement your style. Every curve, every finish — designed with you in mind",
    },
    {
      icon: <Waves size={40} strokeWidth={1.5} />,
      title: "Premium Sound",
      desc: "Immersive audio that moves you. Crystal-clear highs, rich bass, and everything in between.",
    },
    {
      icon: <BatteryFull size={40} strokeWidth={1.5} />,
      title: "Long Battery Life",
      desc: "Power that keeps up with your day. From morning workouts to evening commutes, we've got you covered.",
    },
    {
      icon: <Wifi size={40} strokeWidth={1.5} />,
      title: "Effortless Experience",
      desc: "Seamless connectivity, intuitive controls. Technology that just works, so you can focus on what matters",
    },
  ];

  return (
    <div className="w-full py-36 bg-white">
      {/* Heading */}
      <h2 className="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
    font-bold mb-12 
    text-center md:text-left 
    px-4 md:ml-40
">
  Why Buy from REVE CULT
</h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center px-4 group"
          >
            {/* Circle Background */}
            <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center mb-6 border-2 border-transparent transition-all duration-300 group-hover:border-pink-500 group-hover:scale-110">
              <div className="text-gray-700">{f.icon}</div>
            </div>

            {/* Title */}
            <p className="text-xl font-bold mb-3">{f.title}</p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
