const express = require("express");
const {
  getProducts,
  savedProducts,
} = require("../controllers/products.controller");
const router = express.Router();

router.get("/users", getProducts);
router.post("/users", savedProducts);

module.exports = router;
