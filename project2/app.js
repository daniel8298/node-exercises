const express = require("express");
const app = express();
const morgan = require("./morgan/morganLogger");
const router = require("./router/router");
const startFile = require("./helpers/json");

app.use(express.json());
app.use(express.text());
app.use(morgan);
app.use(router);

app.use((error, req, res, next) => {
  if (error) console.log(error.message);
  return res.status(500).send(error.message);
});

const PORT = 8000;
app.listen(PORT, (error) => {
  startFile();
  if (error) return console.log(`Not listen on`);
  console.log(`listen on: http://localhost:${PORT}`);
});
