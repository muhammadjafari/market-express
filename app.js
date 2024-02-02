const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const mongoConnect = require("./util/database").mongodbConnect;
const mongoose = require("mongoose");
const User = require("./models/user");

const shopRoute = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findUserById("65b7f9c1daf14813aae778d4")
    .then((user) => {
      req.user = new User(user.username, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use(shopRoute);
app.use("/admin", adminRoutes.routes);

app.use((req, res) => {
  res.status(404).send("404");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then((result) => {
    app.listen(3000);
    console.log("database connected...");
  })
  .catch((err) => {
    console.log(err);
  });
