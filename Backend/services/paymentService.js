const Stripe = require('stripe');

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret) : null;

const createPaymentIntent = async ({ amount, currency = 'usd', metadata = {} }) => {
  if (!stripe) throw new Error('Stripe not configured');
  return stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency,
    metadata
  });
};

const retrievePaymentIntent = async (id) => {
  if (!stripe) throw new Error('Stripe not configured');
  return stripe.paymentIntents.retrieve(id);
};

module.exports = { createPaymentIntent, retrievePaymentIntent };


