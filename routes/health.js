var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request
    .get('http://globo.com')
    .on('response', function(response) {
      var output = {
        httpStatusCode: response.statusCode,
        message: response.statusMessage,
        info: "http://api.b2winc.com/doc",
        additionalInfo: null
      };

      res.status(output.httpStatusCode).send(output);
    })
    .on('error', function(err) {
      var error = new Error('Internal Server Error');
      error.status = 500;
      next(error);
    });
});

module.exports = router;
