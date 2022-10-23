const path = require("path");
const products = require("../models/products.model");
exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};
exports.savedProducts = (req, res) => {
  const name = req.body.name;
  const price = req.body.age;
  const product = {
    name,
    age,
  };
  products.push(product);
  res.send(products);
};
