const express = require("express");
const allControllers = require("../controllers");
const allMiddlewares = require("../middlewares");

const authRouters = express.Router();

// post request - create user
authRouters.post(
  "/",
  allMiddlewares.authFieldsValidator,
  allControllers.registerUserController
);

authRouters.get(
  "/:id",
  allMiddlewares.checkIdMiddleware,
  allControllers.getUserController
);

module.exports = authRouters;
