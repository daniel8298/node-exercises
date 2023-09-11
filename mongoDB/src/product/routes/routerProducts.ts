import express from "express";
import {
  getProducts,
  getProductById,
  createNewProduct,
  deleteProductById,
  updateProductById,
  addQuantityProductById,
  subQuantityProductById,
} from "../controller/productController";

const productRouter = express.Router();

productRouter.get("/products", getProducts);

productRouter.get("/product/:id", getProductById);

productRouter.post("/products/", createNewProduct);

productRouter.put("/product/:id", updateProductById);

productRouter.delete("/product/:id", deleteProductById);

productRouter.put("/addQuantityProduct/:id", addQuantityProductById);

productRouter.put("/subQuantityProduct/:id", subQuantityProductById);

export default productRouter;
