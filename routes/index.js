var express = require('express');
var router = express.Router();

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to my Personal Portfolio. I really apreciate your interest.'});
});

/* GET home page. THIS IS ONE ROUTE AND IT IS TO GET TO HOME*/
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome to my Personal Portfolio. I really apreciate your interest.'});
});

/* GET About Us page. THIS IS ONE ROUTE AND IT IS TO GET TO ABOUT ME PAGE*/
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. THIS IS ONE ROUTE AND IT IS TO GET TO PROJECTS*/
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. THIS IS ONE ROUTE AND IT IS TO GET TO SERVICES*/
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Us page. THIS IS ONE ROUTE AND IT IS TO GET TO CONTACT*/
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'});
});

module.exports = router;
