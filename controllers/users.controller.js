const path = require("path");
const users = require("../models/users.model");
exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/user.html"));
};
exports.savedUsers = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const user = {
    name,
    age,
  };
  users.push(user);
  res.send(users);
};
