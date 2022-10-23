const express = require("express");
const {
  getProducts,
  savedProducts,
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/products", getProducts);
router.post("/products", savedProducts);

module.exports = router;
