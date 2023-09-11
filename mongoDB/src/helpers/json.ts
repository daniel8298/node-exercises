import jsonfile from "jsonfile";
import dataAxios from "./mongoDB";
import Product from "../helpers/typeProduct";

// const dataBase = path.join(__dirname, ".././data/productData.json");
const dataBase = "data/productData.json";

const random = () => {
  const number = Math.round(Math.random() * 10);
  return number;
};

export const readJson = async (): Promise<Product[] | Error> => {
  try {
    let data: Product[] = [];

    data = (await dataAxios()) as unknown as Product[];

    data.map((product) => {
      product.quantity = random();
    });

    return data;
  } catch (error) {
    if (error instanceof Error) return error;
    return new Error("Something went wrong!");
  }
};

export default readJson;
