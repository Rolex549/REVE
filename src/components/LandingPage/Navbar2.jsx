import { Search, User, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../assets/untitled design.png";
import { Link } from "react-router-dom"; 

const Navbar2 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 border-b bg-white shadow-sm">

      {/* Left Section */}
      <div className="flex items-center space-x-4 md:space-x-10">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={26} className="text-gray-800" />
        </button>

        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Reve cult" className="h-7 md:h-6 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-base font-medium text-gray-800">

          <li>
            <Link to="/" className="hover:text-red-500 transition">HOME</Link>
          </li>

          {/* SHOP Dropdown */}
          <li className="relative group cursor-pointer hover:text-red-500 transition">
             <Link to="/Shop">Shop</Link>
            <div
              className="
                absolute left-0 top-full mt-2 w-64 bg-white shadow-xl border border-gray-100
                rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible
                translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50
              "
            >
              <ul className="flex flex-col space-y-3 p-6 text-gray-700 text-[15px] font-normal">
                <li className="hover:text-black cursor-pointer">
                  <Link to="/headphones">Headphones</Link>
                </li>

                <li className="hover:text-black cursor-pointer">
                  <Link to="/Earbuds">Earbuds</Link>
                </li>
                <li className="hover:text-black cursor-pointer">
                   <Link to="/Speakers">Speakers</Link>
                </li>
                <li className="hover:text-black cursor-pointer">
                   <Link to="/HomeTheater">HomeTheater</Link>
                </li>
                  
              </ul>
            </div>
          </li>

          <li>
            <Link to="/about" className="hover:text-red-500 cursor-pointer transition">
              ABOUT US
            </Link>
          </li>

          <li>
            <Link to="/support" className="hover:text-red-500 cursor-pointer transition">
              SUPPORT
            </Link>
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-80">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent flex-grow text-sm text-gray-700 outline-none px-2"
        />
        <Search size={18} className="text-gray-500" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <Heart size={20} className="cursor-pointer text-gray-700 hover:text-red-500 transition" />
        <User size={20} className="cursor-pointer text-gray-700 hover:text-red-500 transition" />
        <ShoppingCart size={20} className="cursor-pointer text-gray-700 hover:text-red-500 transition" />

        {/* Mobile Search Icon */}
        <Search className="md:hidden cursor-pointer text-gray-800" />
      </div>

      {/* MOBILE MENU SIDEBAR */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-6">

            {/* Close Button */}
            <button
              className="mb-6"
              onClick={() => setMobileMenu(false)}
            >
              <X size={26} className="text-gray-800" />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col space-y-6 text-lg font-medium text-gray-800">
              <li><Link to="/" onClick={() => setMobileMenu(false)}>HOME</Link></li>
              <li><Link to="/shop" onClick={() => setMobileMenu(false)}>SHOP</Link></li>
              <li><Link to="/about" onClick={() => setMobileMenu(false)}>ABOUT US</Link></li>
              <li><Link to="/support" onClick={() => setMobileMenu(false)}>SUPPORT</Link></li>
            </ul>

            {/* Mobile Search */}
            <div className="mt-8 flex items-center bg-gray-100 rounded-full px-3 py-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent flex-grow text-sm text-gray-700 outline-none px-2"
              />
              <Search size={18} className="text-gray-500" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
