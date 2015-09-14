var express = require('express');
var router = express.Router();

function isNumber(str) {
  return typeof parseInt(str) === 'NaN';
}

router.get('/', function(req, res, next) {
  var reversed = req.query.str.split('').reverse().join('');
  res.json({
  	reversed: (isNumber(req.query.str)) ? reversed : parseInt(reversed)
  });
});

module.exports = router;
