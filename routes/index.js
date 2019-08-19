var express = require('express');
var router = express.Router();
let car = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enter your car' });
});

router.post('/', function(req) {  
  car.push(req.body);
  console.log(car);   
});



module.exports = router;
