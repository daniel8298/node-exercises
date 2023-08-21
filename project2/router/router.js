const express = require("express");
const router = express.Router();

const productRouter = require("../product/routes/routerProducts");
const userRouter = require("../users/routes/routerUsers");

router.use(productRouter);
router.use(userRouter);

module.exports = router;
