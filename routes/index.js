var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avenue Fashion - Home' });
});

/*GET brand page */
router.get('/the-brand', function(req, res, next) {
  res.render('brand', { title: 'Avenue Fashion - The Brand' });
});


/*GET brand page */
router.get('/lookbook', function(req, res, next) {
  res.render('lookbook', { title: 'Avenue Fashion - Lookbook' });
});


/*GET brand page */
router.get('/localstores', function(req, res, next) {
  res.render('localstores', { title: 'Avenue Fashion - Local Stores' });
});


/*GET brand page */
router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Avenue Fashion - Ave Classic Sweatshirts' });
});




module.exports = router;
