const getDB = require("../util/database").getDB;
const mongodb = require("mongodb");

class Product {
  constructor(title, description, price) {
    this.title = title;
    this.description = description;
    this.price = price;
  }

  saveProductData() {
    const db = getDB();
    return db
      .collection("product")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAllProducts() {
    const db = getDB();
    return db
      .collection("product")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchOneProduct(pId) {
    const db = getDB();
    return db
      .collection("product")
      .find({ _id: new mongodb.ObjectId(pId) })
      .next()
      .then((product) => {
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
