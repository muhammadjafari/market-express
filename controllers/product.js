const products = [];

module.exports.addProductPage = (req, res) => {
  res.render("add-product");
};

module.exports.addProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

module.exports.getAllProducts = (req, res) => {
  res.render("shop", {
    pageTitle: "shop",
    products: products,
  });
};
