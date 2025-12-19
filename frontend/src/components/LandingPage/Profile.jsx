import { User, LogOut, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();

  useEffect(() => {
    if (!user) {
      // If not logged in, user will see the login prompt below or we can redirect
      // But better to show a nice UI asking to login
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-lg">Please login to view your profile</p>
        <button 
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
            ) : (
                <User size={32} />
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            {isAdmin && (
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded mt-1 inline-block">Admin</span>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {user.phone && <p><b>Phone:</b> {user.phone}</p>}
          {user.address && <p><b>Address:</b> {user.address}</p>}
          {user.region && <p><b>Region:</b> {user.region}</p>}
        </div>

        <div className="mt-8 flex gap-4 flex-wrap">
            {isAdmin && (
                <button
                onClick={() => navigate("/admin")}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700 transition"
                >
                <LayoutDashboard size={16} /> Admin Dashboard
                </button>
            )}

            <button
            onClick={() => {
                logout();
                navigate("/");
            }}
            className="px-6 py-2 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
            >
            <LogOut size={16} /> Logout
            </button>
        </div>
      </div>
    </div>
  );
}
