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
        if (fileContent) {
          products = JSON.parse(fileContent);
        }
      }
      products.push(this);
      fs.writeFile(filePath, "JSON.stringify(fileContent)", "utf8", (err) => {
        console.log(err);
      });
    });
  }

  static fetchAllProducts() {
    return products;
  }
};
