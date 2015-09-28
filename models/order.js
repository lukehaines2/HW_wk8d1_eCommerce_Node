var mongoose = require('mongoose')

var Product = mongoose.model('Product')
var User = mongoose.model('User')

var orderSchema = new mongoose.Schema({
  price: String,
  createdat: String,
  address: { street: String, postcode: String, town: String, country: String },
  products: [Product.schema], //(Array of Product references)
  User: { type: mongoose.Schema.ObjectId, ref: 'User'}
})

var Order = mongoose.model('Order', orderSchema)

module.exports = Order


