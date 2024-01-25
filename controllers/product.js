const Product = require("../models/single-product");

module.exports.addProductPage = (req, res) => {
  res.render("add-product");
};

module.exports.addProduct = (req, res) => {
  const products = new Product(req.body.title);
  products.saveProductData();
  res.redirect("/");
};

module.exports.getAllProducts = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("shop", {
      pageTitle: "shop",
      products: products,
    });
  });
};
