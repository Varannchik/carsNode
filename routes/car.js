var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('allcar', { titleCar: 'All cars'}); 
  res.send(car);  
});

module.exports = router;
