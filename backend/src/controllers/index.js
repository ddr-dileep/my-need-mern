const {
  registerUserController,
  getCurrentUserController,
  loginUserController,
  updateUserControllers,
  deleteUserController,
} = require("./auth-controllers");

const allControllers = {
  registerUserController,
  getCurrentUserController,
  loginUserController,
  updateUserControllers,
  deleteUserController,
};

module.exports = allControllers;
