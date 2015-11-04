var express = require('express');
var router = express.Router();
var validator = require('../lib/validator');
var helper = require('../lib/helper');

/* GET users listing. */
router.post('/',
  validator.hasField('topic', helper.isString),
  validator.hasField('messages', helper.isArray),
  function(req, res, next) {
    res.send(req.body);
  });

module.exports = router;
