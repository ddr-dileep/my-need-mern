const ApiResponse = require("../api/api-response");
const { validateEmail, isStrongPassword } = require("./../utils");
const JWT = require("jsonwebtoken");

const authFieldsValidator = (req, res, next) => {
  const { userName, password, email } = req.body;
  if (!userName) return ApiResponse.error(res, "Username must be provided");
  else if (userName.length <= 3)
    return ApiResponse.error(res, "Username must be at least 3 characters");
  else if (!email) return ApiResponse.error(res, "Email must be provided");
  else if (!validateEmail(email))
    return ApiResponse.error(res, "Email must be valid");
  else if (!password)
    return ApiResponse.error(res, "Password must be provided");
  else if (!isStrongPassword(password))
    return ApiResponse.error(res, "Password must be strong");
  return next();
};

const loginValidator = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) return ApiResponse.error(res, "Email must be provided");
  else if (!validateEmail(email))
    return ApiResponse.error(res, "Email must be valid");
  else if (!password)
    return ApiResponse.error(res, "Password must be provided");
  return next();
};

const validateJWTMiddleware = async (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) return ApiResponse.error(res, "Unauthorized access");
  const JWTMiddleware = await JWT.verify(token, process.env.JWT_SECRET);
  req.body.id = JWTMiddleware.id;
  return next();
};

module.exports = { authFieldsValidator, loginValidator, validateJWTMiddleware };
