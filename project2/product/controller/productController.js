const productService = require("../service/productService");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    if (!products) throw new Error("not a valid product");

    return res.send(products);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const getProductById = async (req, res) => {
  try {
    const product_id = req.params.id;
    const product = await productService.getProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const createNewProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = await productService.createNewProduct(newProduct);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const updateProductById = async (req, res) => {
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
    return res.status(400).send(error.message);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const product_id = req.params.id;
    const product = await productService.deleteProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const addQuantityProductById = async (req, res) => {
  try {
    const product_id = req.params.id;
    const product = await productService.addQuantityProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const subQuantityProductById = async (req, res) => {
  try {
    const product_id = req.params.id;
    const product = await productService.subQuantityProductById(product_id);
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createNewProduct,
  deleteProductById,
  updateProductById,
  addQuantityProductById,
  subQuantityProductById,
};
