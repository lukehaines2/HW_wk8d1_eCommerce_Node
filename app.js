var mongoose = require('mongoose')
var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/ecommerce-node')

var Product = require('./models/product')
var User = require('./models/user')
var Order = require('./models/order')

// setup modular routing for the animals resource
var orderRoutes = require ('./controllers/order');
app.use('/order', orderRoutes);

app.use(express.static(__dirname + '/public'));
app.listen(3000)

var firstUser = new User({
  name: 'Luke Haines',
  gender: 'male',
  dob: 17/06/1990
})

firstUser.save(function(err, user) {
  if (err) console.log('err')
    console.log('User Saved!')
})


var firstProduct = new Product({
  name: 'Product 1',
  price: 50,
  description: 'product description goes here'
})

firstProduct.save(function(err, product) {
  if (err) console.log('err')
    console.log('Saved the Product')
})


var firstOrder = new Order({
  price: '100',
  createdat: 'Could be anytime tbh',
  address: { street: 'Stringstreet', postcode: "postcode", town: "shittown", country: 'england' },
  // Products: firstProduct,
  User: firstUser
})

firstOrder.save(function(err, order) {
  if (err) console.log('err')
    console.log(firstOrder, 'Order Saved motherfucker!')

   User
  .findOne(order.id)
  .populate('User')
  .exec(function(err, order) {
    if (err) console.log(err)
    console.log(order, 'User Order')
  })
})

firstOrder.products.push(firstProduct)
 