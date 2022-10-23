const path = require("path");
const products = require("../models/products.model");
exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/products.html"));
};
exports.savedProducts = (req, res) => {
  const name = req.body.name;
  const price = req.body.age;
  const product = {
    name,
    price,
  };
  products.push(product);
  res.send(products);
};
