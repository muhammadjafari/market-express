const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectURL = "mongodb://localhost:27017";
const dbName = "onlineShop";

let dbSet;

const mongodbConnect = (cb) => {
  MongoClient.connect(connectURL, { useNewUrlParser: true })
    .then((clinet) => {
      console.log("connected");
      dbSet = clinet.db(dbName);
      cb(clinet);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDB = () => {
  if (dbSet) {
    return dbSet;
  }
  throw "no database found!";
};

exports.mongodbConnect = mongodbConnect;
exports.getDB = getDB;
