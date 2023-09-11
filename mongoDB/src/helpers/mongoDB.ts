import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");

const random = async () => {
  const number = Math.round(Math.random() * 10);
  return number;
};

const mongoData = async () => {
  await client.connect();
  const db = client.db("dbProducts");
  const collection = db.collection("productsMongo");
  return "connect to mongoDB sucssuful";
};

export default mongoData;
