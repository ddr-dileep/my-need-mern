const { authFieldsValidator } = require("./auth-middleware");
const { checkIdMiddleware } = require("./check-id");

const allMiddlewares = { authFieldsValidator, checkIdMiddleware };
module.exports = allMiddlewares;
