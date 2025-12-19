const express = require('express');
const { body } = require('express-validator');
const { getCart, addToCart, updateQuantity, removeFromCart } = require('../controllers/cartController');
const { auth } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.get('/', auth, getCart);
router.post(
  '/',
  auth,
  [body('productId').notEmpty(), body('quantity').optional().isInt({ min: 1 })],
  validateRequest,
  addToCart
);
router.put(
  '/',
  auth,
  [body('productId').notEmpty(), body('quantity').isInt({ min: 1 })],
  validateRequest,
  updateQuantity
);
router.delete('/:productId', auth, removeFromCart);

module.exports = router;


