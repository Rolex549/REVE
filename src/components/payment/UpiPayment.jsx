import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone } from "lucide-react";
import { useState } from "react";

export default function UpiPayment() {
  const navigate = useNavigate();

  const [upiId, setUpiId] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidUpi = (upi) => {
    // basic UPI validation
    return /^[\w.-]+@[\w.-]+$/.test(upi);
  };

  const handlePayment = () => {
    if (!upiId) {
      alert("Please enter your UPI ID");
      return;
    }

    if (!isValidUpi(upiId)) {
      alert("Please enter a valid UPI ID (example@bank)");
      return;
    }

    // 🔄 Simulate payment processing
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/order-success"); // 🎉 success screen
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">

        {/* 🔙 Back */}
        <button
          onClick={() => navigate("/payment")}
          className="text-sm text-gray-500 mb-4 flex gap-2"
        >
          <ArrowLeft size={16} /> Back to Payment
        </button>

        {/* 📱 Header */}
        <div className="flex flex-col items-center mb-6">
          <Smartphone size={44} className="text-pink-600 mb-2" />
          <h2 className="text-2xl font-bold">UPI Payment</h2>
          <p className="text-gray-500 text-sm">
            Pay using Paytm / PhonePe / Google Pay
          </p>
        </div>

        {/* 🔑 UPI Input */}
        <input
          type="text"
          placeholder="example@bank"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="
            w-full p-3 border rounded-lg mb-4
            focus:outline-none focus:ring-2 focus:ring-pink-400
          "
        />

        {/* 💳 Pay Button */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`
            w-full py-3 rounded-xl font-semibold text-white
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90"
            }
            transition
          `}
        >
          {loading ? "Processing Payment..." : "Pay Now"}
        </button>

        {/* 🔐 Trust Text */}
        <p className="text-xs text-gray-400 text-center mt-4">
          🔒 UPI payments are 100% secure and encrypted
        </p>
      </div>
    </div>
  );
}
