var mongoose = require('mongoose')

var User = mongoose.model('User')
var Product = mongoose.model('Product')

var orderSchema = new mongoose.Schema({
  price: String,
  createdat: String,
  address: Object,
  street: String,
  postcode: String,
  town: String,
  country: String
})

var User = mongoose.model('User', userSchema)

module.exports = User


