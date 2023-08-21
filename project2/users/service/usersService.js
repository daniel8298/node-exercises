const dalUsers = require("../dal/dalUsers");

const createNewUser = async () => {
  try {
    const products = await dalUsers.createNewUser();
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

module.exports = {
  createNewUser,
};
