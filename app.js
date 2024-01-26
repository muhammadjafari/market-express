const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoConnect = require("./util/database").mongodbConnect;

const shopRoute = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);
app.use("/admin", adminRoutes.routes);

app.use((req, res) => {
  res.status(404).send("404");
});

mongoConnect(() => {
  app.listen(3000);
});
