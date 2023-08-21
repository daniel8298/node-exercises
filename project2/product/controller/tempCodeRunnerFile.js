const dalProducts = require("../del/dalProducts");

const getProduct = (res, req) => {
  try {
    const product = dalProducts.getProduct();
    if (!product) throw new Error("not a valid product");
    return res.send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

console.log(getProduct);

module.exports = { getProduct };
