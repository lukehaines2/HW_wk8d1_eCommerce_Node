var moongoose = require('mongoose');
var express = require('express');
var router = express.Router();

moongoose.connect('mongodb://localhost/ecommerce-node');

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false}))
router.use(bodyParser.json())

// INDEX
router.get('/', function(req, res) {

  Product.find({}, function(err, products){
    if(err) console.log(err)
    // res.render('index');
    res.json(products);
  })
});

// SHOW 
router.get('/:id', function(req, res) {

  Product.findById(req.params.id, function(err, user) {
    if (err) console.log('err')
    res.json(user)
  })
})

// CREATE

router.post('/', function(req, res){
  Product.create(req.body, function(err, product) {
    if (err) {
      res.json(err)
    }else{
      res.json(req.body)
    }
    })
  })

//   var data = req.body;
//   var newAnimal = new Animal({
//     name: data.name,
//     breed: data.breed,
//     dob: data.dob,
//     gender: data.gender,
//     family: data.family,
//   //the default for new arrivals is for them to be orphans
//     status: 'orphan'
//   })

//   newAnimal.save(function (err, animal) {
//     if(err)
//   res.json(animal);
//   });
// })

// // UPDATE

// //actually we're just using this route to change the adoption status
// //so this is more a custom route really

// router.put('/:id', function(req, res){
//   var outcome;
//   req.body.status === 'orphan' ? outcome = 'adopted' : outcome = 'orphan';

//   Animal.findByIdAndUpdate(req.params.id, {status: outcome}, {}, function(err, result){
//     if(err) console.log(err);
//     res.json(result);
//   })
// })

module.exports = router;