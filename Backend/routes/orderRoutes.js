const express = require('express');
const { body } = require('express-validator');
const {
  createOrder,
  getOrderHistory,
  getAllOrders,
  updateOrderStatus
} = require('../controllers/orderController');
const { auth, adminOnly } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post(
  '/',
  auth,
  [body('items').optional().isArray()],
  validateRequest,
  createOrder
);
router.get('/', auth, getOrderHistory);

router.get('/admin/all', auth, adminOnly, getAllOrders);
router.patch('/:id/status', auth, adminOnly, updateOrderStatus);

module.exports = router;


