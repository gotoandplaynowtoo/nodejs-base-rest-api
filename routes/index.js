var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.status(200).json({
     msg: 'nodejs-api-base v0.1'
  });
});

module.exports = router;
