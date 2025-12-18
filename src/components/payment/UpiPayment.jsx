import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone } from "lucide-react";

export default function UpiPayment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">

        <button onClick={() => navigate("/payment")} className="text-sm text-gray-500 mb-4 flex gap-2">
          <ArrowLeft size={16} /> Back
        </button>

        <Smartphone size={40} className="text-pink-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">UPI Payment</h2>

        <input
          type="text"
          placeholder="Enter UPI ID"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          onClick={() => alert("UPI Payment Triggered")}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
