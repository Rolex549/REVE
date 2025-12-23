const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  // use secure when using port 465
  secure: Number(process.env.EMAIL_PORT) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  // allow TLS connections even with self-signed certs (helps in some environments)
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify().then(() => {
  console.log('Email server ready');
}).catch((err) => {
  console.warn('Email server not ready', err?.message);
});

module.exports = transporter;


