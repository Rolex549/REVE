import { useNavigate } from "react-router-dom";
import { ArrowLeft, Truck } from "lucide-react";

export default function CashOnDelivery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">

        <button
          onClick={() => navigate("/payment")}
          className="flex items-center gap-2 text-sm text-gray-500 mb-4"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <Truck size={48} className="mx-auto text-green-600 mb-4" />

        <h2 className="text-2xl font-bold mb-2">Cash on Delivery</h2>
        <p className="text-gray-500 mb-6">
          Pay when your order arrives at your doorstep.
        </p>

        <button
          onClick={() => alert("Order placed with Cash on Delivery")}
          className="w-full py-3 bg-black text-white rounded-xl font-semibold"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
