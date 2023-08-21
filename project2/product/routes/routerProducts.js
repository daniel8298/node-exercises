const express = require("express");
const {
  getProducts,
  getProductById,
  createNewProduct,
  deleteProductById,
  updateProductById,
  addQuantityProductById,
  subQuantityProductById,
} = require("../controller/productController");

const productRouter = express.Router();

productRouter.get("/products", getProducts);

productRouter.get("/product/:id", getProductById);

productRouter.post("/products/", createNewProduct);

productRouter.put("/Product/:id", updateProductById);

productRouter.delete("/product/:id", deleteProductById);

productRouter.put("/addQuantityProduct/:id", addQuantityProductById);

productRouter.put("/subQuantityProduct/:id", subQuantityProductById);

module.exports = productRouter;
