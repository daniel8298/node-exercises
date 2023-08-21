const dataProduct = "data/productData.json";
const jsonfile = require("jsonfile");

const getProducts = async () => {
  try {
    const products = await jsonfile.readFile(dataProduct);
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getProductById = async (product_id) => {
  try {
    const data = await jsonfile.readFile(dataProduct);
    const product = data.find(
      (productInArray) => productInArray.id === +product_id
    );
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const createNewProduct = async () => {
  try {
    const product = await jsonfile.readFile(dataProduct);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateProductById = async () => {
  try {
    const product = await jsonfile.readFile(dataProduct);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const deleteProductById = async () => {
  try {
    const product = await jsonfile.readFile(dataProduct);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const addQuantityProductById = async () => {
  try {
    const product = await jsonfile.readFile(dataProduct);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const subQuantityProductById = async () => {
  try {
    const product = await jsonfile.readFile(dataProduct);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
  addQuantityProductById,
  subQuantityProductById,
};
