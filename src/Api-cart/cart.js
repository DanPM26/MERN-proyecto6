const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const { cartController } = require('../controllers');
const CartModel = require('../models/cart');

const {  getCart, createCart, deleteproductinCart, updateCart} = cartController

router.get('/', async(req, res) =>{
  const cart = await getCart()
  res.send(cart)
})

router.post('/', async (req, res) => {
  const body = req.body

  try {
    const newCart = await createCart(body)
    res.status(201)
    res.send(newCart)
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400)
      return res.send({
        message: 'Error de validación',
        reason: err.message
      })
    }
    res.status(500)
    return res.send({
      error: err.message
    })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body
  const cart = await updateCart(id, body)

  if (!cart) {
    res.status(404)
    return res.send({
      message: `El producto con id:  ${id}, no se encuentra`
    })
  }
  res.send(cart)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const resultCart = await deleteproductinCart(id)
  res.send(resultCart)
})

  module.exports = router