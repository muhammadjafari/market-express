const express = require("express");

const router = express.Router();

const productControllers = require("../controllers/product");

router.get("/add-product", productControllers.addProductPage);

router.post("/add-product", productControllers.addProduct);

exports.routes = router;
