const ProductModel = require('../models/product')

const getProduct = async () =>{
    return ProductModel.find({})
}

const createProduct = async(body) =>{
    const newProduct = new ProductModel(body)
    newProduct.save()
    return newProduct 
}

const updateProduct = async(_id,updateObject) =>{
    return ProductModel.findByIdAndUpdate({ _id }, updateObject,{
        upsert: false,
        new: true
    })
}

const deleteProduct = async(_id) => {
    return ProductModel.findByIdAndDelete({ _id })
}

module.exports = {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}