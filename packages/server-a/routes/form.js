var express = require('express');
var path = require('path');
var router = express.Router();

/* GET form page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../public/form.html'));
});
router.post('/', function(req, res, next) {
  res.redirect('/?formposted=success')
});


module.exports = router;
