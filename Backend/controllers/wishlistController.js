const Wishlist = require('../models/Wishlist');
const asyncHandler = require('../utils/asyncHandler');

const getWishlist = asyncHandler(async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products');
  res.json(wishlist || { products: [] });
});

const toggleWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  let wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) {
    wishlist = await Wishlist.create({ user: req.user._id, products: [productId] });
  } else if (wishlist.products.find((p) => p.equals(productId))) {
    wishlist.products = wishlist.products.filter((p) => !p.equals(productId));
  } else {
    wishlist.products.push(productId);
  }
  await wishlist.save();
  res.json(wishlist);
});

module.exports = { getWishlist, toggleWishlist };


