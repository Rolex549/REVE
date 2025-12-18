import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, CreditCard, Wallet, Landmark, Truck } from "lucide-react";
import { useEffect } from "react";

export default function Payment() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const Option = ({ icon, label, path }) => (
    <button
      onClick={() => navigate(path)}
      className="w-full flex items-center gap-4 p-4 mb-3 rounded-xl border hover:border-pink-500 transition"
    >
      <span className="text-pink-600">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-2 text-sm text-gray-500 mb-6"
        >
          <ArrowLeft size={16} /> Back to Cart
        </button>

        <h1 className="text-3xl font-bold mb-6">Choose Payment Method</h1>

        <Option icon={<Smartphone />} label="UPI (Paytm / PhonePe / GPay)" path="/payment/upi" />
        <Option icon={<CreditCard />} label="Debit Card" path="/payment/debit" />
        <Option icon={<CreditCard />} label="Credit Card" path="/payment/credit" />
        <Option icon={<Wallet />} label="RuPay Card" path="/payment/rupay" />
        <Option icon={<Landmark />} label="Net Banking" path="/payment/netbanking" />
        <Option icon={<Truck />} label="Cash on Delivery" path="/payment/cod" />
      </div>
    </div>
  );
}
