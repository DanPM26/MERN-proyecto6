const express = require('express');
const apiRouter = require('./apis');
const apiProductRouter = require('./Api-product');
const apiCartRouter = require('./Api-cart')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/api/v1', apiRouter);

app.use('/store/v2',apiProductRouter);

app.use('/cart/v3',apiCartRouter)



app.use('/', (req, res) => {
  res.send({ message: 'esto funciona' })
})

module.exports = app