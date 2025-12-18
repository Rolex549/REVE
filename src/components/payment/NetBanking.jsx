import { useNavigate } from "react-router-dom";
import { ArrowLeft, Landmark } from "lucide-react";

export default function NetBanking() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">

        <button onClick={() => navigate("/payment")} className="text-sm text-gray-500 mb-4 flex gap-2">
          <ArrowLeft size={16} /> Back
        </button>

        <Landmark size={40} className="text-pink-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Net Banking</h2>

        <select className="w-full p-3 border rounded mb-4">
          <option>Select Bank</option>
          <option>SBI</option>
          <option>HDFC</option>
          <option>ICICI</option>
          <option>Axis Bank</option>
        </select>

        <button className="w-full py-3 bg-black text-white rounded-xl">
          Proceed
        </button>
      </div>
    </div>
  );
}
