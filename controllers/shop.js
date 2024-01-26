const Product = require("../models/single-product");

module.exports.getIndex = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("shop/index", {
      pageTitle: "shop",
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

module.exports.getOneProduct = (req, res) => {
  const pId = req.params.productId;
  Product.fetchOneProduct(pId, (p) => {
    console.log(p);
    res.render("shop/product-detail", {
      pageTitle: p.title,
      product: p,
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

module.exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    pageTitle: "orders",
  });
};
