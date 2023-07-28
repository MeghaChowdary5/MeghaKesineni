var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");

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

// open add project page
router.get("/add", (req, res, next) => {
  res.render("projects/add", { title: "add project" });
});

// insert the added project data into mongoDB collection
router.post("/add", async (req, res, next) => {
  try {
    // getting the data from the form
    let new_project = new Project({
      title: req.body.ptitle,
      description: req.body.pdescription,
      deadline: req.body.pdeadline,
    });

    // create a new record with this data and return to projects page
    await new_project.save();
    res.redirect("/projects/list");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// edit button
router.get("/edit/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    const project_to_edit = await Project.findById(id);
    res.render("projects/edit", {
      title: "edit project info",
      project: project_to_edit,
    });
  } catch (err) {
    console.log(err);
    res.end(err);
  }
});

router.post("/edit/:id", async (req, res, next) => {
  try {
    let id = req.params.id;

    let updated_project = {
      title: req.body.ptitle,
      description: req.body.pdescription,
      deadline: req.body.pdeadline,
    };

    await Project.findByIdAndUpdate(id, updated_project);

    res.redirect("/projects/list");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//to delete documents from the collection
router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;

  Project.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/projects/list");
    }
  });
});

module.exports = router;
