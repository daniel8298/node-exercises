const express = require("express");
const { createNewUser } = require("../controller/usersController");

const userRouter = express.Router();

userRouter.post("/registration/", createNewUser);

module.exports = userRouter;
