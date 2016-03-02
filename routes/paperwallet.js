var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('paperwallet/index', { title: 'A Paper Wallet' });
});

router.get('/pandacoin', function(req, res, next) {
    res.render('paperwallet/pandacoin', { title: ' Pandacoin PND'});
});

module.exports = router;
