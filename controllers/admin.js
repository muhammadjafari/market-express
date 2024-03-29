const Product = require("../models/single-product");

module.exports.addProductPage = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "add product",
  });
};

module.exports.addProduct = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const products = new Product(title, description, price, req.user._id);
  products
    .saveProductData()
    .then((result) => {
      console.log("product created");
      res.redirect("/admin/add-product");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getProducts = (req, res) => {
  Product.fetchAllProducts()
    .then((products) => {
      res.render("admin/products", {
        pageTitle: "admin products",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteProduct = (req, res) => {
  const pId = req.body.productId;
  Product.deleteOneProduct(pId)
    .then(() => {
      console.log("product deleted");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
