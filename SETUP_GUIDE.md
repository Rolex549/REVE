# Frontend-Backend Connection & Admin Panel Setup Guide

## ✅ What's Been Done

1. **Backend Server** - Fixed to start properly with dotenv
2. **API Configuration** - Created `frontend/src/config/api.js` with all API endpoints
3. **Authentication** - Created AuthContext, Login, and Register components
4. **Admin Panel** - Full admin panel with dashboard, users, orders, and products management
5. **Navbar Integration** - Updated navbar to show login/logout and admin access
6. **Routes** - Added auth and admin routes to App.jsx

## 🚀 Quick Start

### 1. Backend Setup

```bash
cd Backend

# Install dependencies (if not already done)
npm install

# Create .env file
# Copy the following and create .env file:
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=your-secret-key-change-this
JWT_REFRESH_SECRET=your-refresh-secret-change-this

it is frontend link
CLIENT_URL=http://localhost:5173

# Start backend server
npm start
# or for development with auto-reload:
npm run dev  # (if nodemon is installed)
```

### 2. Frontend Setup

```bash
cd frontend

# Create .env file
it is backend 
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Install dependencies (if not already done)
npm install

# Start frontend
npm run dev
```

### 3. Create Admin User & Verify Email

**Important**: After registration, users need to verify their email. For development/testing, you can manually verify users in MongoDB.

**Step 1: Register a user through the frontend**

**Step 2: Verify the user in MongoDB**
```javascript
// In MongoDB shell or Compass
// Verify email and make admin (if needed)
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { isVerified: true, role: "admin" } }
)
```

**Alternative: Verify email without making admin**
```javascript
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { isVerified: true } }
)
```

**Note**: In production, users will receive an email verification link. For development, manually set `isVerified: true` in the database.

## 📁 New Files Created

### Frontend
- `frontend/src/config/api.js` - API configuration
- `frontend/src/context/AuthContext.jsx` - Authentication context
- `frontend/src/components/Auth/Login.jsx` - Login component
- `frontend/src/components/Auth/Register.jsx` - Registration component
- `frontend/src/components/Admin/AdminPanel.jsx` - Admin panel

### Backend
- `Backend/.env.example` - Environment variables template

## 🔐 Authentication Flow

1. **Registration**: User registers → Email verification required
2. **Login**: User logs in → Gets access token → Stored in localStorage
3. **Protected Routes**: Token sent with API requests
4. **Admin Access**: Only users with `role: "admin"` can access `/admin`

## 🎯 API Endpoints Used

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/users/me` - Get current user profile

### Admin (Protected)
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/users` - List all users
- `PATCH /api/admin/users/:id/block` - Block/unblock user
- `GET /api/admin/orders` - List all orders
- `PATCH /api/admin/orders/:id/status` - Update order status
- `GET /api/admin/products` - List all products

## 🎨 Features

### User Features
- ✅ Login/Registration
- ✅ User profile management
- ✅ Protected routes
- ✅ Token-based authentication

### Admin Features
- ✅ Admin dashboard with statistics
- ✅ User management (view, block/unblock)
- ✅ Order management (view, update status)
- ✅ Product management (view, create, update, delete)
- ✅ Admin-only access protection

## 🔧 Troubleshooting

### Backend not starting
- Check MongoDB is running
- Verify `.env` file exists with correct `MONGODB_URI`
- Check port 5000 is not in use

### Frontend can't connect to backend
- Verify backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env` matches backend URL
- Check CORS settings in backend (should allow frontend URL)

### Login not working
- Check user is verified (`isVerified: true` in database)
- Verify JWT_SECRET is set in backend `.env`
- Check browser console for errors

### Admin panel access denied
- Verify user has `role: "admin"` in database
- Check user is logged in
- Verify token is being sent with requests

## 📝 Next Steps

1. **Start both servers** (backend and frontend)
2. **Register a user** through the frontend
3. **Create admin user** by updating role in database
4. **Test login** and access admin panel
5. **Customize** admin panel and add more features as needed

## 🎉 You're All Set!

Your frontend and backend are now connected with:
- ✅ User authentication (login/register)
- ✅ Admin panel with full functionality
- ✅ Protected routes
- ✅ API integration

Happy coding! 🚀

