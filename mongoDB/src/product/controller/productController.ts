import { ObjectId } from "mongodb";
import productService from "../service/productService";
import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getProducts();
    if (!products) throw new Error("not a valid product");
    return res.send(products);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
    return new Error("Something went wrong!");
  }
};
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product_id = req.params.id;
    const product = await productService.getProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
    return new Error("Something went wrong!");
  }
};

export const createNewProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;
    const product = await productService.createNewProduct(newProduct);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
    return new Error("Something went wrong!");
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  try {
    const product_id = req.params.id;
    const updateProduct = req.body;
    const product = await productService.updateProductById(
      product_id,
      updateProduct
    );
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
    return new Error("Something went wrong!");
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const product_id = req.params.id;
    const product = await productService.deleteProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
    return new Error("Something went wrong!");
  }
};

export const addQuantityProductById = async (req: Request, res: Response) => {
  try {
    const product_id = req.params.id;
    const product = await productService.addQuantityProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
    return new Error("Something went wrong!");
  }
};
export const subQuantityProductById = async (req: Request, res: Response) => {
  try {
    const product_id = req.params.id;
    const product = await productService.subQuantityProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    if (error instanceof Error) res.status(400).send(error.message);
    return new Error("Something went wrong!");
  }
};

export default {
  getProducts,
  getProductById,
  createNewProduct,
  deleteProductById,
  updateProductById,
  addQuantityProductById,
  subQuantityProductById,
};
