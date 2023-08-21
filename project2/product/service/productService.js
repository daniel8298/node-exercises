const dalProducts = require("../dal/dalProducts");
const jsonfile = require("jsonfile");
const dataBase = "data/productData.json";

const getProducts = async () => {
  try {
    const products = await dalProducts.getProducts();
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const getProductById = async (product_id) => {
  try {
    const product = await dalProducts.getProductById(product_id);
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const createNewProduct = async (newProduct) => {
  try {
    if (typeof newProduct !== "object") throw new Error("not a valid info");
    const product = await dalProducts.createNewProduct();
    product.push(newProduct);
    jsonfile.writeFile(dataBase, product, { spaces: 4 });
    return Promise.resolve(product);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const updateProductById = async (product_id, updateProduct) => {
  try {
    const dataProduct = await dalProducts.updateProductById();
    const product = dataProduct.find(
      (productInArray) => productInArray.id === +product_id
    );
    const productIndex = dataProduct.indexOf(product);
    dataProduct[productIndex] = updateProduct;
    jsonfile.writeFile(dataBase, dataProduct, { spaces: 4 });
    return Promise.resolve(dataProduct);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const deleteProductById = async (product_id) => {
  try {
    const dataProduct = await dalProducts.deleteProductById();

    const index = dataProduct.findIndex(
      (productInArray) => productInArray.id === +product_id
    );
    if (index === -1) throw new Error("not a valid info");
    dataProduct.splice(index, 1);
    jsonfile.writeFile(dataBase, dataProduct, { spaces: 4 });
    return Promise.resolve(dataProduct);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const addQuantityProductById = async (product_id) => {
  try {
    const dataProduct = await dalProducts.addQuantityProductById();
    const product = dataProduct.find(
      (productInArray) => productInArray.id === +product_id
    );
    product.quantity++;
    jsonfile.writeFile(dataBase, dataProduct, { spaces: 4 });
    return Promise.resolve(dataProduct);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

const subQuantityProductById = async (product_id) => {
  try {
    const dataProduct = await dalProducts.subQuantityProductById();
    const product = dataProduct.find(
      (productInArray) => productInArray.id === +product_id
    );
    product.quantity--;
    jsonfile.writeFile(dataBase, dataProduct, { spaces: 4 });
    return Promise.resolve(dataProduct);
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
