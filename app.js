var mongoose = require('mongoose')
var express = require('express');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/heathrow-express')

var User = require('./models/user')
var Product = require('./models/product')
var User = require('./models/user')