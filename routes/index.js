var express = require('express');
var router = express.Router();

/* GET home page. */
// Only responds to get calls
// The first argument to this method is the URL path 
// while the second is a callback function that will be 
// invoked if an HTTP GET request with the path is received.

//The callback takes three arguments (usually named as shown: req, res, next)
// that will contain the 
// HTTP Request object (req)
// HTTP response, and (res)
// the next function in the middleware chain. (next)

// So here we 'complete the request' rendering the Index HTML page (req)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
