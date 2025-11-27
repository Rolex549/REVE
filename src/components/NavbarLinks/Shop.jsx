import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, ArrowLeft, Sparkles } from 'lucide-react';
import { useCart } from '../LandingPage/CartContext';
import { useNavigate } from "react-router-dom";
import image10 from '../../assets/TWS 600 (1) original.png'
import image30 from '../../assets/SOUL original.jpg';
import image40 from '../../assets/BUDS TONE original.png';
import image110 from '../../assets/TWS 600(2) original.png';
import image120 from '../../assets/TWS 600(3) original.png';
import image310 from '../../assets/SOUL(2) original.png';
import image410 from '../../assets/BUDS TONE black original.png';
import image420 from '../../assets/REVE TONE Cyan.png';
import image430 from '../../assets/BUDS TONE white.png';


// Memoized Product Card Component
const ProductCard = memo(({ product, selectedColor, onColorChange, onAddToCart, onViewDetails, isAdded, isHovered, onHover }) => {
  const currentImage = product.colors[selectedColor].image;

  return (
    <div
      className="group relative"
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
        <div className="relative overflow-hidden aspect-square p-6 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-blue-50/30">
          <img
            src={currentImage}
            alt={`${product.name} - ${product.colors[selectedColor].name}`}
            className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />

          <button
            onClick={onViewDetails}
            className={`absolute top-3 right-3 bg-white/95 p-2.5 rounded-full shadow-lg hover:bg-pink-50 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Eye className="w-4 h-4 text-pink-600" />
          </button>
        </div>

        <div className="p-5 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm font-bold text-gray-800">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
          </div>

          <div className="flex items-center gap-2.5 mb-4">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                onClick={() => onColorChange(idx)}
                className="relative w-7 h-7 rounded-full transition-transform hover:scale-125 active:scale-95"
                title={color.name}
              >
                <div
                  className="absolute inset-0 rounded-full transition-shadow duration-200"
                  style={{
                    backgroundColor: color.hex,
                    boxShadow: selectedColor === idx
                      ? `0 0 0 2px white, 0 0 0 4px ${color.hex}`
                      : '0 0 0 1px rgba(0,0,0,0.1)'
                  }}
                />
                {selectedColor === idx && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-baseline gap-2 mb-5">
            <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ₹{product.salePrice.toLocaleString()}
            </span>
          </div>

          <button
            onClick={onAddToCart}
            className={`w-full font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 ${isAdded
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                : 'bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white'
              }`}
          >
            {isAdded ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Added to Cart!
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColors, setSelectedColors] = useState({});
  const [slideDirection, setSlideDirection] = useState({});
  const [addedToCart, setAddedToCart] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);



  const products = [
    {
      id: 1,
      name: "TWS 600",
      colors: [
        { name: "Blue", hex: "#4A90E2", image: image10 },
        { name: "Black", hex: "#1a1a1a", image: image110 },
        { name: "White", hex: "#F5F5F5", image: image120 },
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
        { name: "Navy", hex: "#001F3F", image: image30 },
        { name: "Black", hex: "#1a1a1a", image: image310 },
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
        { name: "Cream", hex: "#F5E6D3", image: image40 },
        { name: "Black", hex: "#1a1a1a", image: image410 },
        { name: "Cyan", hex: "#00FFFF", image: image420 },
        { name: "White", hex: "#F5F5F5", image: image430 }
      ],
      rating: 4.7,
      reviews: 4163,
      salePrice: 1499,
      features: ["Spatial Audio", "Transparency Mode", "Wireless Charging"]
    }
  ];

  const handleColorChange = (productId, colorIndex, currentIndex) => {
    setSlideDirection(prev => ({
      ...prev,
      [productId]: colorIndex > currentIndex ? 'left' : 'right'
    }));
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorIndex
    }));
  };

  const handleAddToCart = (product) => {
    const currentColorIndex = selectedColors[product.id] || 0;
    const productWithColor = {
      ...product,
      selectedColor: product.colors[currentColorIndex]
    };

    addToCart(productWithColor);

    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white relative">
      {/* Static background - removed blur for performance */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-pink-200 rounded-full opacity-10 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full opacity-10 pointer-events-none" />

      {/* Header - Reduced backdrop blur */}
      <div className="sticky top-0 z-40 bg-white/90 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between">

            {/* BACK BUTTON */}
            <button className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold hidden sm:inline">Back</span>
            </button>

            {/* TITLE */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Shop
            </h1>

            {/* RIGHT SIDE — CLICKABLE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="font-semibold text-gray-700 hover:text-pink-600 transition"
              >
                Categories
              </button>

              {showCategories && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl p-2 z-50">

                  <button
                    onClick={() => {
                      setShowCategories(false);
                      navigate("/earbuds");    // <-- IMPORTANT
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-pink-50 transition"
                  >
                    Earbuds
                  </button>

                  <button
                    onClick={() => {
                      setShowCategories(false);
                      navigate("/earbuds");    // <-- IMPORTANT
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-pink-50 transition"
                  >
                    Headphones
                  </button>

                  <button
                    onClick={() => {
                      setShowCategories(false);
                      navigate("/earbuds");    // <-- IMPORTANT
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-pink-50 transition"
                  >
                    Powerbank
                  </button>

                  <button
                    onClick={() => {
                      setShowCategories(false);
                      navigate("/earbuds");    // <-- IMPORTANT
                    }}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-pink-50 transition"
                  >
                    HomeTheater
                  </button>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>



      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - No animation on load */}
          <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-semibold text-pink-700">New Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              Shop by style
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your perfect sound companion with premium quality
            </p>
          </div>

          {/* Desktop & Tablet: Grid layout - No stagger animation */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                selectedColor={selectedColors[product.id] || 0}
                onColorChange={(idx) => handleColorChange(product.id, idx, selectedColors[product.id] || 0)}
                onAddToCart={() => handleAddToCart(product)}
                onViewDetails={() => setSelectedProduct(product)}
                isAdded={addedToCart[product.id]}
                isHovered={hoveredProduct === product.id}
                onHover={setHoveredProduct}
              />
            ))}
          </div>

          {/* Mobile: Card layout */}
          <div className="sm:hidden space-y-6">
            {products.map((product) => {
              const currentColorIndex = selectedColors[product.id] || 0;
              const currentImage = product.colors[currentColorIndex].image;

              return (
                <div
                  key={product.id}
                  className="relative"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="relative overflow-hidden aspect-square p-8 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-blue-50/30">
                      <img
                        src={currentImage}
                        alt={`${product.name} - ${product.colors[currentColorIndex].name}`}
                        className="relative w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center bg-yellow-50 px-2.5 py-1.5 rounded-lg">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-bold text-gray-800">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
                      </div>

                      <div className="flex items-center gap-3 mb-5">
                        {product.colors.map((color, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleColorChange(product.id, idx, currentColorIndex);
                            }}
                            className="relative w-8 h-8 rounded-full transition-transform active:scale-90"
                            title={color.name}
                          >
                            <div
                              className="absolute inset-0 rounded-full transition-shadow"
                              style={{
                                backgroundColor: color.hex,
                                boxShadow: currentColorIndex === idx
                                  ? `0 0 0 2px white, 0 0 0 4px ${color.hex}`
                                  : '0 0 0 1px rgba(0,0,0,0.1)'
                              }}
                            />
                            {currentColorIndex === idx && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-baseline gap-2 mb-5">
                        <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                          ₹{product.salePrice.toLocaleString()}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                        className={`w-full font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg active:scale-95 ${addedToCart[product.id]
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                            : 'bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white'
                          }`}
                      >
                        {addedToCart[product.id] ? (
                          <>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            Added!
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white/95 p-3 rounded-full shadow-lg hover:bg-pink-50 z-10 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-blue-50/50 rounded-t-3xl overflow-hidden pt-16 pb-8">
                  <img
                    src={selectedProduct.colors[selectedColors[selectedProduct.id] || 0].image}
                    alt={selectedProduct.name}
                    className="w-full h-64 sm:h-80 md:h-96 object-contain px-8"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-xl">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-lg font-bold text-gray-800">{selectedProduct.rating}</span>
                  </div>
                  <span className="text-gray-600">({selectedProduct.reviews.toLocaleString()} reviews)</span>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-700 mb-4">Available Colors:</p>
                  <div className="flex items-center gap-4">
                    {selectedProduct.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleColorChange(selectedProduct.id, idx, selectedColors[selectedProduct.id] || 0)}
                        className="relative w-12 h-12 rounded-full transition-transform hover:scale-110 active:scale-95"
                        title={color.name}
                      >
                        <div
                          className="absolute inset-0 rounded-full transition-shadow"
                          style={{
                            backgroundColor: color.hex,
                            boxShadow: (selectedColors[selectedProduct.id] || 0) === idx
                              ? `0 0 0 3px white, 0 0 0 6px ${color.hex}`
                              : '0 0 0 2px rgba(0,0,0,0.08)'
                          }}
                        />
                        {(selectedColors[selectedProduct.id] || 0) === idx && (
                          <svg
                            className="absolute inset-0 m-auto w-6 h-6 text-white drop-shadow-lg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-baseline gap-3 mb-8">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{selectedProduct.salePrice.toLocaleString()}
                  </span>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-base">
                        <span className="w-2.5 h-2.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setTimeout(() => setSelectedProduct(null), 1200);
                  }}
                  className={`w-full font-bold py-4 sm:py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-200 shadow-xl text-lg active:scale-95 ${addedToCart[selectedProduct.id]
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                      : 'bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white'
                    }`}
                >
                  {addedToCart[selectedProduct.id] ? (
                    <>
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Successfully Added!
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}