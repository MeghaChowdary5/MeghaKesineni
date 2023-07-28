var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");

module.exports = {
    "URI": "mongodb://127.0.0.1:27017/projectDB",
  };
  
// connect to model
let Contact = require("../models/contact-form");

// manage routes
router.get("/", (req, res, next) => {
  Contact.find((err, contact_list) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("/", {
        title: "Contact Request Info",
        ContactList: contact_list,
      });
    }
  });
});

// opens the page? actually no idk fr
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// insert the added contact data into mongoDB collection
router.post("/", async (req, res, next) => {
  try {
    // getting the data from the form and creating an object
    let new_contact_form = new Contact({
      name: req.body.cname,
      email: req.body.cemail,
      message: req.body.cmessage,
    });

    // create a new record with this data and return to **home** page
    await new_contact_form.save();
    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
