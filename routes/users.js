var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.json(car={
    model: model,
    price :price,
    picture: picture
  });
});

module.exports = router;
