var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// set up database
let mongoose = require("mongoose");
let DB = require("./db");

mongoose.connect(process.env.URI || DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Node.JS is successfully connected to MongoDB.");
});

var indexRouter = require("../routes/index");
var usersRouter = require("../routes/users");
//var aboutMeRouter = require("../routes/about_me");
var projectsRouter = require("../routes/projects");
//var servicesRouter = require("../routes/services");
//var contactMeRouter = require("../routes/contact_me");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "../Views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

//this is the line that made the bootstrap and icons work
app.use(express.static(path.join(__dirname, "../node_modules")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//app.use("/about_me", aboutMeRouter);
app.use("/projects", projectsRouter);
//app.use("/services", servicesRouter);
//app.use("/contact_me", contactMeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;