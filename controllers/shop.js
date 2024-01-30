const Product = require("../models/single-product");

module.exports.getIndex = (req, res) => {
  Product.fetchAllProducts()
    .then((products) => {
      res.render("shop/index", {
        pageTitle: "shop",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getAllProducts = (req, res) => {
  Product.fetchAllProducts()
    .then((products) => {
      res.render("shop/product-list", {
        pageTitle: "all products",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getOneProduct = (req, res) => {
  const pId = req.params.productId;
  Product.fetchOneProduct(pId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.id,
      });
    })
    .catch();
};

module.exports.getCart = (req, res) => {
  req.user
    .getCart()
    .then((products) => {
      res.render("shop/cart", {
        pageTitle: "cart",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.postCart = (req, res) => {
  const pId = req.body.productId;
  Product.fetchOneProduct(pId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);
      res.redirect("/cart");
    });
};

// module.exports.getCheckout = (req, res) => {
//   res.render("shop/checkout", {
//     pageTitle: "checkout",
//   });
// };

// module.exports.getOrders = (req, res) => {
//   res.render("shop/orders", {
//     pageTitle: "orders",
//   });
// };
