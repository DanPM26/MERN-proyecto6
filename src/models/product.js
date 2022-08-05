const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
    name: { 
      type: String,
       required: true, 
       unique: true },
    img: {
       type: String, 
       required: true },
    inCart: { 
      type: Boolean, 
      default: false },
    price: { 
      type: Number, 
      required: true },
  });
  
  const ProductModel = model('product', ProductSchema);
  module.exports = ProductModel