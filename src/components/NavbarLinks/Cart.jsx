import { useCart } from "../LandingPage/CartContext";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Cart() {
  const cartContext = useCart();

  // ✅ SAFEST POSSIBLE WAY
  const cart =
    cartContext?.cart ??
    cartContext?.cartItems ??
    [];

  const {
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = cartContext || {};

  const navigate = useNavigate();

  // ✅ SCROLL TO TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ TOTAL PRICE (NOW 100% SAFE)
  const totalAmount = cart.reduce(
    (total, item) =>
      total + (item?.salePrice || 0) * (item?.quantity || 1),
    0
  );

  // ✅ EMPTY CART UI
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <ShoppingCart size={64} className="text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">
          Your Cart is empty
        </h2>
        <p className="text-gray-500 mb-6">
          Add products to see them here 🛒
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="px-8 py-3 bg-black text-white rounded-lg font-semibold"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">My Cart 🛒</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl shadow-md"
            >
              <img
                src={item.image || "/placeholder.png"}
                alt={item.name || "Product"}
                className="h-32 w-32 object-contain"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-pink-600 font-bold mt-1">
                  ₹{item.salePrice}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => decreaseQty?.(item.id)}
                    className="p-2 border rounded-lg"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="font-semibold">
                    {item.quantity || 1}
                  </span>

                  <button
                    onClick={() => increaseQty?.(item.id)}
                    className="p-2 border rounded-lg"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart?.(item.id)}
                className="text-red-500"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total Amount</span>
            <span className="font-bold text-pink-600">
              ₹{totalAmount}
            </span>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
