const usersService = require("../service/usersService");

const createNewUser = async (req, res) => {
  try {
    const users = await usersService.createNewUser();
    if (!users) throw new Error("not a valid product");

    return res.send(users);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  createNewUser,
};
