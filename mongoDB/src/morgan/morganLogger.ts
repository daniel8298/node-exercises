import express from "express";
const app = express();
import morgan from "morgan";

app.use(morgan("tiny"));

export default app;
