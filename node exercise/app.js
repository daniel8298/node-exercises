let users = require("./data");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const passwordValidator = require("password-validator");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");
const jsonfile = require("jsonfile");

const app = express();
const schema = new passwordValidator();
const passwordCheck = schema.is().min(8).has().uppercase().has().lowercase();
app.use(express.json());
app.use(express.text());

const file = "./users.json";

app.get("/users", async (req, res) => {
  if (users) {
    res.send(users);
  } else {
    res.status(400).send("users is not defined");
  }
});

app.post("/users", (req, res) => {
  try {
    const user = req.body;
    if (typeof user !== "object" || !user.password || !user.email)
      throw new Error("not a valid info");

    if (!emailValidator.validate(user.email)) throw new Error("Invalid email");
    else if (!passwordCheck.validate(user.password))
      throw new Error("Invalid password");
    else {
      user.id = uuidv4();
      user.password = bcrypt.hashSync(user.password, 10);
      users.push(user);
      return res.send(users);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.put("/users/:id", (req, res) => {
  try {
    const userBody = req.body;
    const user_id = req.params.id;
    const user = users.find((element) => element.id === user_id);

    if (!user) throw new Error("User is not defined");
    if (typeof userBody !== "object") throw new Error("not a valid info");

    const user_index = users.indexOf(user);

    if (userBody.id) users[user_index].id = userBody.id;

    if (userBody.email) {
      if (!emailValidator.validate(userBody.email))
        throw new Error("Invalid email");
      else {
        users[user_index].email = userBody.email;
      }
    }

    if (userBody.password) {
      if (!passwordCheck.validate(userBody.password))
        throw new Error("Invalid password");
      else {
        users[user_index].password = bcrypt.hashSync(userBody.password, 10);
      }
    }
    return res.send("change user");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/users/:id", (req, res) => {
  const user_id = req.params.id;
  const len = users.length;
  users = users.filter((element) => element.id !== user_id);

  if (users.length < len) {
    res.send("remove user");
  } else {
    res.status(400).send("person is not defined");
  }
});

app.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (element) =>
      element.email === email && bcrypt.compareSync(password, element.password)
  );

  if (user) {
    res.send("User is connected");
  } else {
    res.status(401).send("Wrong credentials");
  }
});

app.use((error, req, res, next) => {
  if (error) console.log(error.message);
  res.status(500).send(error.message);
});

const PORT = 8200;
app.listen(PORT, () => {
  console.log(`listen on: http://localhost:${PORT}`);
});
