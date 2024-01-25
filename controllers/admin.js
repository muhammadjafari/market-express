const Product = require("../models/single-product");

module.exports.addProductPage = (req, res) => {
  res.render("admin/add-product");
};

module.exports.addProduct = (req, res) => {
  const products = new Product(req.body.title);
  products.saveProductData();
  res.redirect("/");
};

module.exports.getProducts = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("admin/products", {
      pageTitle: "all products",
      products: products,
    });
  });
};
