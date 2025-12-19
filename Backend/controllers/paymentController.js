const asyncHandler = require('../utils/asyncHandler');
const { createPaymentIntent, retrievePaymentIntent } = require('../services/paymentService');

const createIntent = asyncHandler(async (req, res) => {
  const { amount, currency = 'usd', metadata = {} } = req.body;
  if (!amount) return res.status(400).json({ message: 'Amount is required' });
  const intent = await createPaymentIntent({
    amount,
    currency,
    metadata: { userId: req.user._id.toString(), ...metadata }
  });
  res.json({ clientSecret: intent.client_secret, intentId: intent.id });
});

const verifyIntent = asyncHandler(async (req, res) => {
  const { intentId } = req.params;
  const intent = await retrievePaymentIntent(intentId);
  res.json({ status: intent.status, amount: intent.amount, currency: intent.currency });
});

module.exports = { createIntent, verifyIntent };


