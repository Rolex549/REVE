import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard } from "lucide-react";

export default function DebitCard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">

        <button onClick={() => navigate("/payment")} className="text-sm text-gray-500 mb-4 flex gap-2">
          <ArrowLeft size={16} /> Back
        </button>

        <CreditCard size={40} className="text-pink-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Debit Card</h2>

        <input placeholder="Card Number" className="w-full p-3 border rounded mb-3" />
        <input placeholder="MM / YY" className="w-full p-3 border rounded mb-3" />
        <input placeholder="CVV" className="w-full p-3 border rounded mb-4" />

        <button className="w-full py-3 bg-black text-white rounded-xl">
          Pay Now
        </button>
      </div>
    </div>
  );
}
