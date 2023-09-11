import express from "express";
const router = express.Router();
import productRouter from "../product/routes/routerProducts";
// import userRouter from "../users/routes/routerUsers";

router.use(productRouter);
// router.use(userRouter);

export default router;
