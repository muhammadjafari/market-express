const fs = require("fs");
const path = require("path");
// const absolutePath = path.resolve("../");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  saveProductData() {
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    console.log(filePath);
    fs.readFile(filePath, (err, fileContent) => {
      let products = [];
      console.log(fileContent);
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAllProducts(cb) {
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
