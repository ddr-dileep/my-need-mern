const express = require("express");
const allControllers = require("../controllers");
const allMiddlewares = require("../middlewares");

const authRouters = express.Router();

authRouters.post(
  "/",
  allMiddlewares.authFieldsValidator,
  allControllers.registerUserController
);

module.exports = authRouters;
