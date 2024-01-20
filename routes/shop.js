const express = require("express");
const path = require("path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  const products = adminData.products;
  res.render("shop", {
    pageTitle: "shop",
    products: products,
  });
});

module.exports = router;
