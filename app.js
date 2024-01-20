const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const shopRoute = require("./routes/shop");
const adminData = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);
app.use("/admin", adminData.routes);

app.use((req, res) => {
  res.status(404).send("404");
});

app.listen(3000);
