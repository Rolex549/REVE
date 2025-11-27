import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="w-full bg-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Left Side - Text */}
        <div className="text-left flex-shrink-0">
          <h2 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight uppercase">
            UNLOCK EXCLUSIVE
            <br />
            DEALS & DROPS
          </h2>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:flex-1 max-w-xl flex flex-col gap-3">
          <div className="relative">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-14 pr-6 py-4 rounded-full bg-white text-gray-800 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
          </div>
          <button className="w-full py-4 rounded-full bg-white text-black text-base font-semibold hover:bg-gray-100 transition-all duration-200 active:scale-95">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}