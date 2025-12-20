const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');
const asyncHandler = require('../utils/asyncHandler');

const dashboard = asyncHandler(async (_req, res) => {
  const [users, orders, products, revenue] = await Promise.all([
    User.countDocuments(),
    Order.countDocuments(),
    Product.countDocuments(),
    Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totals.grandTotal' } } }
    ])
  ]);
  const recentOrders = await Order.find().sort('-createdAt').limit(5);
  res.json({
    totals: {
      users,
      orders,
      products,
      revenue: revenue[0]?.total || 0
    },
    recentOrders
  });
});

const listUsers = asyncHandler(async (_req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

const setUserBlock = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isBlocked: req.body.block },
    { new: true }
  ).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

const listOrders = asyncHandler(async (_req, res) => {
  const orders = await Order.find().populate('user', 'name email').sort('-createdAt');
  res.json(orders);
});

const listProducts = asyncHandler(async (_req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = {
  dashboard,
  listUsers,
  setUserBlock,
  listOrders,
  listProducts
};


