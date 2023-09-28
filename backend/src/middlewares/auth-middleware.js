const ApiResponse = require("../api/api-response");
const { validateEmail, isStrongPassword } = require("./../utils");

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

module.exports = { authFieldsValidator };
