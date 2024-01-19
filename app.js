const express = require("express");

const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");

const app = express();

app.use(shopRoute);
app.use("/admin", adminRoute);

app.use((req, res) => {
  res.status(404).send("404");
});

app.listen(3000);
