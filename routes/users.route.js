const express = require("express");
const { getUsers, savedUsers } = require("../controllers/users.controller");
const router = express.Router();

router.get("/users", getUsers);
router.post("/users", savedUsers);

module.exports = router;
