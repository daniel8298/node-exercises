const axios = require("axios");

const data = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error.message);
  }
};
module.exports = data;
