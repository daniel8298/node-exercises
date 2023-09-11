import dalProducts from "../dal/dalProducts";
import Product from "../../helpers/typeProduct";
import { ObjectId } from "mongodb";
const dataBase = "data/productData.json";

export const getProducts = async (): Promise<Product[] | Error> => {
  try {
    const products = await dalProducts.getProducts();
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductById = async (
  product_id: string
): Promise<Product[] | Error> => {
  try {
    const product = (await dalProducts.getProductById(
      product_id
    )) as unknown as Product[];
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createNewProduct = async (
  newProduct: Product
): Promise<Product[] | Error> => {
  try {
    const product = (await dalProducts.createNewProduct(
      newProduct
    )) as unknown as Product[];
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProductById = async (
  product_id: string,
  updateProduct: Product
): Promise<Product[] | Error> => {
  try {
    const dataProduct = (await dalProducts.updateProductById(
      product_id,
      updateProduct
    )) as unknown as Product[];
    return Promise.resolve(dataProduct);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProductById = async (
  product_id: string
): Promise<Product[] | Error> => {
  try {
    const dataProduct = (await dalProducts.deleteProductById(
      product_id
    )) as unknown as Product[];
    return Promise.resolve(dataProduct);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addQuantityProductById = async (
  product_id: string
): Promise<Product[] | Error> => {
  try {
    const dataProduct = (await dalProducts.addQuantityProductById(
      product_id
    )) as unknown as Product[];
    return Promise.resolve(dataProduct);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const subQuantityProductById = async (
  product_id: string
): Promise<Product[] | Error> => {
  try {
    const dataProduct = (await dalProducts.subQuantityProductById(
      product_id
    )) as unknown as Product[];
    return Promise.resolve(dataProduct);
  } catch (error) {
    return Promise.reject(error);
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
