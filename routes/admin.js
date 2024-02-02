const express = require("express");

const router = express.Router();

const adminControllers = require("../controllers/admin");

// router.get("/add-product", adminControllers.addProductPage);

// router.get("/products", adminControllers.getProducts);

// router.post("/add-product", adminControllers.addProduct);

// router.post("/delete-product", adminControllers.deleteProduct);

exports.routes = router;
