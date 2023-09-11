import Product from "../../helpers/typeProduct";
import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");

export const getProducts = async (): Promise<Product[] | Error> => {
  try {
    await client.connect();
    const db = client.db("dbProducts");
    const collection = db.collection("productsMongo");

    const products = (await collection
      .find({})
      .toArray()) as unknown as Product[];
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductById = async (product_id: string) => {
  try {
    await client.connect();
    const db = client.db("dbProducts");
    const collection = db.collection("productsMongo");
    const product = (await collection
      .find({ _id: new ObjectId(product_id) })
      .toArray()) as unknown as Product;
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createNewProduct = async (newProduct: Product) => {
  try {
    await client.connect();
    const db = client.db("dbProducts");
    const collection = db.collection("productsMongo");
    const product = await collection.insertOne(newProduct);
    if (!(product instanceof Error)) return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProductById = async (
  product_id: string,
  updateProduct: Product
) => {
  try {
    await client.connect();
    const db = client.db("dbProducts");
    const collection = db.collection("productsMongo");
    const product = await collection.updateOne(
      { _id: new ObjectId(product_id) },
      { $set: { ...updateProduct } }
    );
    if (!(product instanceof Error)) return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProductById = async (product_id: string) => {
  try {
    await client.connect();
    const db = client.db("dbProducts");
    const collection = db.collection("productsMongo");
    const product = await collection.deleteOne({
      _id: new ObjectId(product_id),
    });
    if (!(product instanceof Error)) return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addQuantityProductById = async (product_id: string) => {
  try {
    await client.connect();
    const db = client.db("dbProducts");
    const collection = db.collection("productsMongo");
    const product = await collection.updateOne(
      { _id: new ObjectId(product_id) },
      { $inc: { quantity: +1 } }
    );
    if (!(product instanceof Error)) return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const subQuantityProductById = async (product_id: string) => {
  try {
    await client.connect();
    const db = client.db("dbProducts");
    const collection = db.collection("productsMongo");
    const product = await collection.updateOne(
      { _id: new ObjectId(product_id) },
      { $inc: { quantity: -1 } }
    );
    if (!(product instanceof Error)) return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  getProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
  addQuantityProductById,
  subQuantityProductById,
};
