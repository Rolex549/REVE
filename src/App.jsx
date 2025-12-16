import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ================= CONTEXT ================= */
import { CartProvider } from "./components/LandingPage/CartContext";
import { WishlistProvider } from "./components/LandingPage/WishlistContext";

/* ================= LAYOUT ================= */
import Navbar2 from "./components/LandingPage/Navbar2";
import Footer from "./components/LandingPage/Footer";

/* ================= LANDING PAGE ================= */
import Hero2 from "./components/LandingPage/Hero2";
import FeaturedProduct from "./components/LandingPage/FeaturedProduct";
import JoinTheCult from "./components/LandingPage/JoinTheCult";
import TrustBadges from "./components/LandingPage/TrustBadges";

/* ================= MAIN PAGES ================= */
import About from "./components/NavbarLinks/About";
import Shop from "./components/NavbarLinks/Shop";
import Support from "./components/NavbarLinks/Support";
import Cart from "./components/NavbarLinks/Cart";
import Wishlist from "./components/NavbarLinks/Wishlist";

/* ================= SHOP PAGES ================= */
import Earbuds from "./components/ShopLinks/Earbuds";

/* ================= PRODUCT ================= */
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>

          {/* 🔹 NAVBAR (GLOBAL) */}
          <Navbar2 />

          {/* 🔹 ROUTES */}
          <Routes>
            {/* ================= HOME ================= */}
            <Route
              path="/"
              element={
                <>
                  <Hero2 />
                  <FeaturedProduct />
                  <JoinTheCult />
                  <TrustBadges />
                </>
              }
            />

            {/* ================= MAIN ROUTES ================= */}
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/support" element={<Support />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* ================= SHOP CATEGORY ================= */}
            <Route path="/earbuds" element={<Earbuds />} />

            {/* ================= PRODUCT DETAILS ================= */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* ================= 404 ================= */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
                  404 – Page Not Found
                </div>
              }
            />
          </Routes>

          {/* 🔹 FOOTER (GLOBAL) */}
          <Footer />

        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
