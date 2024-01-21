const express = require("express");
const path = require("path");

const productControllers = require("../controllers/product");

const router = express.Router();

router.get("/", productControllers.getAllProducts);

module.exports = router;
