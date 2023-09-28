const {
  registerUserController,
  getUserController,
} = require("./auth-controllers");

const allControllers = { registerUserController, getUserController };

module.exports = allControllers;
