const express = require('express');
const { body } = require('express-validator');
const { getWishlist, toggleWishlist } = require('../controllers/wishlistController');
const { auth } = require('../middlewares/authMiddleware');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.get('/', auth, getWishlist);
router.post('/', auth, [body('productId').notEmpty()], validateRequest, toggleWishlist);

module.exports = router;


