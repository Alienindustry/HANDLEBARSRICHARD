var express = require("express");
var app = express();

// var mongoose = require('mongoose');
// var bodyParser = require(body-parser);
// Require = handlebars ('express package');
var handlebars = require("express-handlebars");
// var bcrypt = require('bcryptjs');
// var passport = require('passport');
// var session = require('express-session');
//  require('./middleware/passport')(passport);

// const contact = require("./models/Contact");
const user = require("./models/User");

var mongoose = require("mongoose");
var Food = require("./models/Food");
var bodyParser = require("body-parser");
var User = require("./models/User");
var Meal = require("./models/Meal");

// app.use(express.static('public'));
// app.use(session({
//     secret: 'mysecret',
//     resave: true,
//     saveUninitialized: true
// }))

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

//use app.set to tell express to use handlebars as our view engine
app.set("view engine", "hbs");
//Pass some additional information to handlebars to that is can find our layouts folder, and allow
//us to use the .hbs extension for our files.
app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});

app.get("/1-signin", (req, res) => {
  res.render("1-signin", { layout: "signin" });
});

app.get("/2-signup", (req, res) => {
  res.render("2-signup", { layout: "main" });
});

app.post("/signup", (req, res) => {
  const { firstName, lastName, emailAddress, password } = req.body;
  console.log(firstName);
  let user = new User({
    firstName,
    lastName,
    emailAddress,
    password,
  });

  user.save();
  res.send("usersaved");
});

app.post("/addmeal", (req, res) => {
  const {
    fish,
    meats,
    vegetables,
    fruits,
    dairy,
    soups,
    seasonings,
    beverages,
    vegans,
  } = req.body;

  let meal = new Meal({
    fish,
    meats,
    vegetables,
    fruits,
    dairy,
    soups,
    seasonings,
    beverages,
    vegans,
  });

  meal.save();
  res.send("mealsaved");
});

app.get("/3-food-list", (req, res) => {
  res.render("3-food-list", { layout: "main" });
});

app.post("/addfood", (req, res) => {
  const { foodType, perishable, sellByDate } = req.body;

  let food = new Food({
    foodType,
    perishable,
    sellByDate,
  });

  food.save();
  res.send("foodsaved");
});

app.get("/4-pantry-page", (req, res) => {
  res.render("4-pantry-page", { layout: "main" });
});

app.get("/5-meal-alerts", (req, res) => {
  res.render("5-meal-alerts", { layout: "main" });
});

app.get("/6-meal-maker", (req, res) => {
  res.render("6-meal-maker", { layout: "meal-maker" });
});

app.get("/7-accounts-page", (req, res) => {
  res.render("7-accounts-page", { layout: "main" });
});

app.get("/8-reset-password", (req, res) => {
  res.render("8-reset-password", { layout: "main" });
});

app.get("/9-password-success", (req, res) => {
  res.render("9-password-success", { layout: "main" });
});

mongoose
  .connect(
    "mongodb+srv://RichardBS:Bailey999@cluster0-3uy5p.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Not Connected to DB : " + err);
  });

//Listening for requests on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
