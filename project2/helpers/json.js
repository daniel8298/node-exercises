const jsonfile = require("jsonfile");
const fs = require("fs");
const dataBase = "data/productData.json";
const dataAxios = require("../helpers/axios");

const random = () => {
  const number = Math.round(Math.random() * 10);
  return number;
};

const readJson = async () => {
  try {
    const file = fs.readFileSync(dataBase, "utf-8");
    if (file.length === 0) {
      const data = await dataAxios();
      data.map((product) => {
        product.quantity = random();
      });
      jsonfile.writeFile(dataBase, data, { spaces: 4 });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = readJson;
