const express = require('express')
const router = express.Router();
const cors = require('cors');

router.use(cors());
const cartRouter = require('../Api-cart/cart')

router.use('/cart',cartRouter)

module.exports = router