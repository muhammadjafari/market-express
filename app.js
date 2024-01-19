const express = require("express");

const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");

const app = express();

app.use(shopRoute);
app.use(adminRoute);

app.listen(3000);
