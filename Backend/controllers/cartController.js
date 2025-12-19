const Cart = require('../models/Cart');
const Product = require('../models/Product');
const asyncHandler = require('../utils/asyncHandler');

const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  res.json(cart || { items: [], subtotal: 0 });
});

const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    cart = await Cart.create({
      user: req.user._id,
      items: [{ product: productId, quantity, price: product.price }],
      subtotal: product.price * quantity
    });
  } else {
    const existing = cart.items.find((i) => i.product.equals(productId));
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity, price: product.price });
    }
    cart.subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    await cart.save();
  }
  res.status(201).json(cart);
});

const updateQuantity = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });
  const item = cart.items.find((i) => i.product.equals(productId));
  if (!item) return res.status(404).json({ message: 'Item not found' });
  item.quantity = quantity;
  cart.subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  await cart.save();
  res.json(cart);
});

const removeFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });
  cart.items = cart.items.filter((i) => !i.product.equals(productId));
  cart.subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  await cart.save();
  res.json(cart);
});

module.exports = { getCart, addToCart, updateQuantity, removeFromCart };


