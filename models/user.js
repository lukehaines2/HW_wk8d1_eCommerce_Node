var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: {type: String, required: true },
  gender: String,
  dob: Date,
})

var User = mongoose.model('User', userSchema)

module.exports = User


