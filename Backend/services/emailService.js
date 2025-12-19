const transporter = require('../config/mailer');
const { verificationEmail, resetPasswordEmail, orderConfirmationEmail } = require('../utils/emailTemplates');

const sendVerificationEmail = async (user, link) => {
  const mail = verificationEmail(user.name, link);
  return transporter.sendMail({
    to: user.email,
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    ...mail
  });
};

const sendResetEmail = async (user, link) => {
  const mail = resetPasswordEmail(user.name, link);
  return transporter.sendMail({
    to: user.email,
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    ...mail
  });
};

const sendOrderConfirmation = async (user, order) => {
  const mail = orderConfirmationEmail(user.name, order);
  return transporter.sendMail({
    to: user.email,
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    ...mail
  });
};

module.exports = { sendVerificationEmail, sendResetEmail, sendOrderConfirmation };


