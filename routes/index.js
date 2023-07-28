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
// connect to project model
let Project = require("../models/projects");

router.get("/list", async (req, res, next) => {
  try {
    const projectList = await Project.find();
    res.render("projects/list", {
      title: "project info",
      ProjectList: projectList,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});
router.get('projects/edit', function(req, res, next) {
  res.render('projects/edit', { title: 'Edit'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});

module.exports = router;