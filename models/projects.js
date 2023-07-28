let mongoose = require("mongoose");

// create model of projects
let projects_model = mongoose.Schema(
  {
    "name": String,
    "description": String,
    "time": String,
  },
  {
    collection: "project",
  }
);

module.exports = mongoose.model("Projects", projects_model);
