const Product = require("../models/single-product");

module.exports.getIndex = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("shop/index", {
      pageTitle: "index",
      products: products,
    });
  });
};

module.exports.getAllProducts = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("shop/product-list", {
      pageTitle: "all products",
      products: products,
    });
  });
};

module.exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: "cart",
  });
};

module.exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "checkout",
  });
};
