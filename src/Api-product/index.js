const express = require('express')
const router = express.Router();
const cors = require('cors');


const productRouter = require('./products')



router.use(cors());


router.use('/product', productRouter)


module.exports = router