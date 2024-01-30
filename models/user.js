const getDB = require("../util/database").getDB;
const mongodb = require("mongodb");

class User {
  constructor(username, email, cart, id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  saveUserData() {
    const db = getDB();
    return db.collection("user").isertOne(this);
  }

  addToCart(product) {
    const updatedCart = {
      items: [{ productId: new mongodb.ObjectId(product._id), qty: 1 }],
    };
    const db = getDB();
    return db
      .collection("user")
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  static findUserById(uId) {
    const db = getDB();
    return db
      .collection("user")
      .findOne({ _id: new mongodb.ObjectId(uId) })
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
