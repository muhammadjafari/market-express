const express = require("express");
const path = require("path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(adminData.products);
  res.sendFile(path.join(__dirname, "../", "/view", "shop.html"));
});

module.exports = router;
