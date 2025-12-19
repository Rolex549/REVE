import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import { adminAPI } from '../../config/api';
import { useNavigate } from 'react-router-dom';
import AdminProductForm from './AdminProductForm';
import AddCategoryForm from './AddCategoryForm';


const AdminPanel = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
      return;
    }
    loadDashboard();
  }, [isAdmin, navigate]);

  const loadDashboard = async () => {
    try {
      const data = await adminAPI.dashboard();
      setDashboard(data);
    } catch (error) {
      console.error('Failed to load dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadUsers = useCallback(async () => {
    try {
      const data = await adminAPI.getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Failed to load users:', error);
    }
  }, []);

  const loadOrders = useCallback(async () => {
    try {
      const data = await adminAPI.getOrders();
      setOrders(data);
    } catch (error) {
      console.error('Failed to load orders:', error);
      // If the error is auth related, log the user out and redirect to login for a fresh session
      if (/(jwt|Authentication|required|Session expired)/i.test(error.message)) {
        logout();
        navigate('/login');
      }
    }
  }, [logout, navigate]);

  const loadProducts = useCallback(async () => {
    try {
      const data = await adminAPI.getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to load products:', error);
      if (/(jwt|Authentication|required|Session expired)/i.test(error.message)) {
        logout();
        navigate('/login');
      }
    }
  }, [logout, navigate]);

  const loadCategories = useCallback(async () => {
    try {
      const data = await adminAPI.getCategories();
      setCategories(data);
    } catch (error) {
      console.error('Failed to load categories:', error);
      if (/(jwt|Authentication|required|Session expired)/i.test(error.message)) {
        logout();
        navigate('/login');
      }
    }
  }, [logout, navigate]);

  useEffect(() => {
    if (activeTab === 'users') loadUsers();
    if (activeTab === 'orders') loadOrders();
    if (activeTab === 'products') loadProducts();
    if (activeTab === 'categories') loadCategories();
  }, [activeTab, loadUsers, loadOrders, loadProducts, loadCategories]);

  const handleBlockUser = async (userId, block) => {
    try {
      await adminAPI.blockUser(userId, block);
      loadUsers();
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleUpdateOrderStatus = async (orderId, status) => {
    try {
      await adminAPI.updateOrderStatus(orderId, status);
      loadOrders();
    } catch (error) {
      console.error('Failed to update order:', error);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p>You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full z-10">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome, {user?.name}</p>
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeTab === 'dashboard' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeTab === 'users' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeTab === 'orders' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeTab === 'products' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              activeTab === 'categories' ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg mt-8"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        {activeTab === 'dashboard' && dashboard && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                <p className="text-3xl font-bold mt-2">{dashboard.totalUsers}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
                <p className="text-3xl font-bold mt-2">{dashboard.totalOrders}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
                <p className="text-3xl font-bold mt-2">{dashboard.totalProducts}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
                <p className="text-3xl font-bold mt-2">₹{(dashboard.totalRevenue ?? 0).toLocaleString()}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Users Management</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-medium text-gray-500">Name</th>
                    <th className="px-6 py-4 font-medium text-gray-500">Email</th>
                    <th className="px-6 py-4 font-medium text-gray-500">Role</th>
                    <th className="px-6 py-4 font-medium text-gray-500">Status</th>
                    <th className="px-6 py-4 font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((u) => (
                    <tr key={u._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{u.name}</td>
                      <td className="px-6 py-4">{u.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {u.role.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          u.isBlocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {u.isBlocked ? 'BLOCKED' : 'ACTIVE'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {u.role !== 'admin' && (
                          <button
                            onClick={() => handleBlockUser(u._id, !u.isBlocked)}
                            className={`text-sm font-medium ${
                              u.isBlocked ? 'text-green-600 hover:text-green-700' : 'text-red-600 hover:text-red-700'
                            }`}
                          >
                            {u.isBlocked ? 'Unblock' : 'Block'}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Orders Management</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-medium text-gray-900">Order #{order._id.slice(-8)}</p>
                      <p className="text-sm text-gray-500">{order.createdAt ? new Date(order.createdAt).toLocaleDateString() : '—'}</p>
                      <p className="text-sm text-gray-600 mt-1">{order.user?.email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateOrderStatus(order._id, e.target.value)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium border-none outline-none ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <span className="font-bold text-lg">₹{order.totalAmount}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-sm">
                        <span className="text-gray-500">{item.quantity}x</span>
                        <span className="text-gray-800">{item.product?.name || 'Unknown Product'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
              <button
                onClick={() => setShowAddCategory(true)}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
              >
                Add Category
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 font-medium text-gray-500">Name</th>
                    <th className="px-6 py-4 font-medium text-gray-500">Parent</th>
                    <th className="px-6 py-4 font-medium text-gray-500">Slug</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {categories.map((c) => (
                    <tr key={c._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{c.name}</td>
                      <td className="px-6 py-4">{c.parent?.name || '—'}</td>
                      <td className="px-6 py-4">{c.slug}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Products Management</h2>
              <button 
                onClick={() => setShowAddProduct(true)}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
              >
                Add Product
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p._id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={p.images[0]?.url || 'placeholder.jpg'} 
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 truncate">{p.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-pink-600 font-bold">₹{p.price}</span>
                    <span className="text-sm text-gray-500">Stock: {p.stock}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showAddProduct && (
        <AdminProductForm 
          onClose={() => setShowAddProduct(false)} 
          onCreated={() => {
            setShowAddProduct(false);
            loadProducts();
          }} 
        />
      )}

      {showAddCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Category</h2>
              <button onClick={() => setShowAddCategory(false)} className="text-gray-500 hover:text-gray-800">Close</button>
            </div>
            <AddCategoryForm
              categories={categories}
              onCreated={async () => {
                setShowAddCategory(false);
                await loadCategories();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
