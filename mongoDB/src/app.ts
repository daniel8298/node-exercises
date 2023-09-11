import express, { NextFunction, Request, Response } from "express";
const app = express();
import morgan from "./morgan/morganLogger";
import router from "./router/router";
import mongoData from "./helpers/mongoDB";

app.use(express.json());
app.use(express.text());
app.use(morgan);
app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error) console.log(error.message);
  return res.status(500).send(error.message);
});

const PORT = 7160;
app.listen(PORT, () => {
  console.log(`listen on: http://localhost:${PORT}`);
  mongoData()
    .then((message) => {
      console.log(message);
    })
    .catch(console.error);
});
