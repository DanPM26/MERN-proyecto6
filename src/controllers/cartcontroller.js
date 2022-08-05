const ProductModel = require('../models/product')
const CartModel = require('../models/cart');

const getCart = async () =>{
  return CartModel.find({})
}

const createCart = async(body) =>{
  const {id, name, price} = req.body

  const estaenProducts =  await ProductModel.findOne({id,name});
  const noEstaVacio = name !== "" && img !== "" && price !== "";
  const estaEnElCarrito = await CartModel.findOne({ name });
  
  if (!estaenProducts) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });
  } else if (noEstaVacio && !estaEnElCarrito) {
    const newCart = new CartModel({name, img,price, amount:1}, body)
    
    await Product.findByIdAndUpdate(
      estaenProducts?._id,
      { inCart: true, name, img, price },
      { new: true }
    )
.then(() =>{
  newCart.save()
  res.json({
    mensaje: `El producto no se agregó al carrito`,
    product
  })
  .catch((error) => console.error(error));
})
}
 
}

const updateCart = async(_id,updateObject) =>{
  return CartModel.findByIdAndUpdate({ _id }, updateObject,{
      upsert: false,
      new: true
  })
}

const deleteproductinCart = async(_id) => {
  return CartModel.findByIdAndDelete({ _id })
}

module.exports = {
    getCart,
    createCart,
    deleteproductinCart,
    updateCart
}