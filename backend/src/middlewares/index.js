const {
  authFieldsValidator,
  loginValidator,
  validateJWTMiddleware,
} = require("./auth-middleware");
const { checkIdMiddleware } = require("./check-id");

const allMiddlewares = {
  authFieldsValidator,
  checkIdMiddleware,
  loginValidator,
  validateJWTMiddleware,
};
module.exports = allMiddlewares;
