const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

let users = [
  { id: uuidv4(), email: "daniel8298@gmail.com", password: "254" },
  { id: uuidv4(), email: "david98@gmail.com", password: "666" },
  { id: uuidv4(), email: "ari123@gmail.com", password: "484" },
];

users.forEach((element) => {
  element.password = bcrypt.hashSync(element.password, 10);
});

module.exports = users;
