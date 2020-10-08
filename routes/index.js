var express = require('express');
var router = express.Router();

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products'});
});

/* GET Services page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Us page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});

module.exports = router;
