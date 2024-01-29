const getDB = require("../util/database").getDB;
const mongodb = require("mongodb");

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  saveUserData() {
    const db = getDB();
    return db.collection("user").isertOne(this);
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
