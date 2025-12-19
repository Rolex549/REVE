const express = require('express');
const { body } = require('express-validator');
const { createIntent, verifyIntent } = require('../controllers/paymentController');
const { auth } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post(
  '/intent',
  auth,
  [body('amount').isFloat({ gt: 0 })],
  validateRequest,
  createIntent
);

router.get('/intent/:intentId', auth, verifyIntent);

module.exports = router;


