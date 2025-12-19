const verificationEmail = (name, link) => ({
  subject: 'Verify your account',
  html: `
    <p>Hi ${name || 'there'},</p>
    <p>Thanks for signing up. Please verify your email to activate your account.</p>
    <p><a href="${link}" style="color:#2563eb">Verify Email</a></p>
    <p>If you did not create an account, please ignore this email.</p>
  `
});

const resetPasswordEmail = (name, link) => ({
  subject: 'Reset your password',
  html: `
    <p>Hi ${name || 'there'},</p>
    <p>We received a request to reset your password.</p>
    <p><a href="${link}" style="color:#2563eb">Reset Password</a></p>
    <p>If you did not request this, you can safely ignore this email.</p>
  `
});

const orderConfirmationEmail = (name, order) => ({
  subject: `Order ${order.orderNumber} confirmed`,
  html: `
    <p>Hi ${name || 'there'},</p>
    <p>Thank you for your purchase. Your order ${order.orderNumber} is confirmed.</p>
    <p>Total: ${order.payment?.amount}</p>
    <p>Status: ${order.status}</p>
  `
});

module.exports = {
  verificationEmail,
  resetPasswordEmail,
  orderConfirmationEmail
};


