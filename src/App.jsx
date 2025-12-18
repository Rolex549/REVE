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

/* ================= PAYMENT ================= */
import Payment from "./components/payment/Payment";
import UpiPayment from "./components/payment/UpiPayment";
import DebitCard from "./components/payment/DebitCard";
import CreditCard from "./components/payment/CreditCard";
import Rupay from "./components/payment/Rupay";
import NetBanking from "./components/payment/NetBanking";
import CashOnDelivery from "./components/payment/CashOnDelivery";
import OrderSuccess from "./components/payment/OrderSuccess";
import Profile from "./components/LandingPage/Profile";


const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>

          {/* ================= NAVBAR (GLOBAL) ================= */}
          <Navbar2 />

          {/* ================= ROUTES ================= */}
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
            <Route path="/profile" element={<Profile />} />


            {/* ================= SHOP CATEGORY ================= */}
            <Route path="/earbuds" element={<Earbuds />} />

            {/* ================= PRODUCT DETAILS ================= */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* ================= PAYMENT FLOW ================= */}
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/upi" element={<UpiPayment />} />
            <Route path="/payment/debit" element={<DebitCard />} />
            <Route path="/payment/credit" element={<CreditCard />} />
            <Route path="/payment/rupay" element={<Rupay />} />
            <Route path="/payment/netbanking" element={<NetBanking />} />
            <Route path="/payment/cod" element={<CashOnDelivery />} />
            <Route path="/order-success" element={<OrderSuccess />} />


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

          {/* ================= FOOTER (GLOBAL) ================= */}
          <Footer />

        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
