var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET skills page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;