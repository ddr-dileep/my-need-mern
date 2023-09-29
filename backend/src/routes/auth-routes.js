const express = require("express");
const allControllers = require("../controllers");
const allMiddlewares = require("../middlewares");

const authRouters = express.Router();

// post request - create user
authRouters.post(
  "/register",
  allMiddlewares.authFieldsValidator,
  allControllers.registerUserController
);

authRouters.get(
  "/user/:id",
  allMiddlewares.checkIdMiddleware,
  allControllers.getCurrentUserController
);

authRouters.post(
  "/login",
  allMiddlewares.loginValidator,
  allControllers.loginUserController
);

authRouters.get(
  "/current-user",
  allMiddlewares.validateJWTMiddleware,
  allControllers.getCurrentUserController
);

authRouters.get(
  "/update-user",
  allMiddlewares.validateJWTMiddleware,
  allControllers.updateUserControllers
);

authRouters.get(
  "/delete-user",
  allMiddlewares.validateJWTMiddleware,
  allControllers.deleteUserController
);

module.exports = authRouters;
