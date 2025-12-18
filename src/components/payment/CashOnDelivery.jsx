import { useNavigate } from "react-router-dom";
import { ArrowLeft, Truck } from "lucide-react";
import { useState } from "react";

export default function CashOnDelivery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    // 🔄 Simulate order confirmation
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/order-success"); // 🎉 success screen
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">

        {/* 🔙 Back */}
        <button
          onClick={() => navigate("/payment")}
          className="flex items-center gap-2 text-sm text-gray-500 mb-4"
        >
          <ArrowLeft size={16} /> Back to Payment
        </button>

        {/* 🚚 Icon */}
        <Truck size={52} className="mx-auto text-green-600 mb-4" />

        {/* 🧾 Content */}
        <h2 className="text-2xl font-bold mb-2">Cash on Delivery</h2>
        <p className="text-gray-500 mb-6">
          Pay when your order arrives at your doorstep.
        </p>

        {/* ✅ Confirm Button */}
        <button
          onClick={handleConfirm}
          disabled={loading}
          className={`
            w-full py-3 rounded-xl font-semibold text-white
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:opacity-90"
            }
            transition
          `}
        >
          {loading ? "Placing Order..." : "Confirm Order"}
        </button>

        {/* 🔐 Trust */}
        <p className="text-xs text-gray-400 mt-4">
          🚚 Cash will be collected at delivery time
        </p>
      </div>
    </div>
  );
}
