var moongoose = require('mongoose');
var express = require('express');
var router = express.Router();

moongoose.connect('mongodb://localhost/ecommerce-node');

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false}))
router.use(bodyParser.json())

var User = require('../models/user')

// INDEX
router.get('/', function(req, res) {

  User.find({}, function(err, users){
    if(err) console.log(err)
    // res.render('index');
    res.json(users);
  })
});

// SHOW 
router.get('/:id', function(req, res) {

  User.findById(req.params.id, function(err, user) {
    if (err) console.log('err')
    res.json(users)
  })
})

// CREATE

router.post('/', function(req, res){
  User.create(req.body, function(err, user) {
    if (err) {
      res.json(err)
    }else{
      res.json(req.body)
    }
    })
  })

module.exports = router;