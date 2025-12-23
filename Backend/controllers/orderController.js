const { v4: uuid } = require('uuid');
const Order = require('../models/Order');
const Product = require('../models/Product');
const Cart = require('../models/Cart');
const asyncHandler = require('../utils/asyncHandler');
const { sendOrderConfirmation } = require('../services/emailService');

const createOrder = asyncHandler(async (req, res) => {
  const { items, shippingAddress, billingAddress, paymentIntentId, paymentProvider, totals } = req.body;

  // If items not provided, fallback to cart
  let orderItems = items;
  if (!orderItems || !orderItems.length) {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || !cart.items.length) return res.status(400).json({ message: 'Cart is empty' });
    orderItems = cart.items.map((i) => ({
      product: i.product._id,
      quantity: i.quantity,
      price: i.price
    }));
  }

  // Ensure prices are synced with DB
  const recalculated = await Promise.all(
    orderItems.map(async (item) => {
      const product = await Product.findById(item.product);
      return {
        product: item.product,
        quantity: item.quantity,
        price: product.price
      };
    })
  );

  const subtotal = recalculated.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = totals?.tax || 0;
  const shipping = totals?.shipping || 0;
  const discount = totals?.discount || 0;
  const grandTotal = subtotal + tax + shipping - discount;

  const order = await Order.create({
    orderNumber: uuid().split('-')[0].toUpperCase(),
    user: req.user._id,
    items: recalculated,
    shippingAddress,
    billingAddress: billingAddress || shippingAddress,
    status: 'processing',
    payment: {
      provider: paymentProvider || 'stripe',
      paymentIntentId,
      amount: grandTotal,
      currency: 'usd',
      status: paymentIntentId ? 'paid' : 'pending'
    },
    totals: { subtotal, tax, shipping, discount, grandTotal }
  });

  // Attempt to send confirmation email but don't fail the order creation if email fails
  try {
    await sendOrderConfirmation(req.user, order);
  } catch (err) {
    console.error('Order confirmation email failed:', err?.message || err);
  }

  await Cart.findOneAndUpdate({ user: req.user._id }, { items: [], subtotal: 0 });

  res.status(201).json(order);
});

const getOrderHistory = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate('items.product', 'name price images')
    .sort('-createdAt');
  res.json(orders);
});

const getAllOrders = asyncHandler(async (_req, res) => {
  const orders = await Order.find()
    .populate('user', 'name email')
    .populate('items.product', 'name price images')
    .sort('-createdAt');
  res.json(orders);
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});

module.exports = {
  createOrder,
  getOrderHistory,
  getAllOrders,
  updateOrderStatus
};


