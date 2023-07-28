let mongoose = require("mongoose");

// create model of contact form
let contact_model = mongoose.Schema(
  {
    "name": String,
    "email": String,
    "message": String,
  },
  {
    collection: "contact-forms",
  }
);

module.exports = mongoose.model("Contact", contact_model);
