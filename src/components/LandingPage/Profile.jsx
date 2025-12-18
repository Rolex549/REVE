import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Please login to view your profile</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={32} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Address:</b> {user.address}</p>
          <p><b>Region:</b> {user.region}</p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
          }}
          className="mt-8 px-6 py-2 bg-black text-white rounded-lg flex items-center gap-2"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </div>
  );
}
