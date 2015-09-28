var mongoose = require('mongoose')

var Order = mongoose.model('Order')
var Product = mongoose.model('Product')

var orderSchema = new mongoose.Schema({
  name: {type: String, required: true },
  gender: String,
  dob: Date,
  orders: [Order.schema]
})
