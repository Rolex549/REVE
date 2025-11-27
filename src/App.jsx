import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/LandingPage/CartContext' // Add this import
import Navbar2 from './components/LandingPage/Navbar2'
import Hero2 from './components/LandingPage/Hero2'
import FeaturedProduct from './components/LandingPage/FeaturedProduct'
import TrustBadges from './components/LandingPage/TrustBadges'
// import Newsletter from './components/LandingPage/Newsletter'
import FAQ from './components/LandingPage/FAQ'
import Footer from './components/LandingPage/Footer'
import About from './components/NavbarLinks/About'
import Shop from './components/NavbarLinks/Shop'
import Support from './components/NavbarLinks/Support'
import Cart from './components/payment/Cart'
import Trending from './components/LandingPage/Trending'
import Headphones from './components/ShopLinks/Headphones'
import Earbuds from './components/ShopLinks/Earbuds'
import Speakers from './components/ShopLinks/Speakers'
import HomeTheater from './components/ShopLinks/HomeTheater'



const App = () => {
  return (
    <CartProvider> {/* Wrap everything with CartProvider */}
      <Router>
        <div>
          {/* Navbar appears on all pages */}
          <Navbar2 />
          
          {/* Define Routes */}
          <Routes>
            {/* Home/Landing Page Route */}
            <Route path="/" element={
              <>
                <Hero2 />
                <FeaturedProduct />
                <Trending />
                <TrustBadges />
                {/* <Team /> */}
                {/* <FAQ /> */}
                {/* <Newsletter /> */}
              </>
            } />
            
            {/* About Page Route */}
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/support" element={<Support />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Headphones" element={<Headphones />} />
            <Route path="/Earbuds" element={<Earbuds />} />
            <Route path="/Speakers" element={<Speakers />} />
            <Route path="/HomeTheater" element={<HomeTheater />} />
          </Routes>
          
          {/* Footer appears on all pages */}
          <Footer />
        </div>
      </Router>
    </CartProvider> // Close the CartProvider here
  )
}

export default App