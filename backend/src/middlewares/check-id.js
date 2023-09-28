const ApiResponse = require("../api/api-response");
const { ObjectId } = require("mongodb");

const checkIdMiddleware = (req, res, next) => {
  const idToCheck = req.params.id;

  if (!idToCheck) return ApiResponse.error(res, "Id is required");
  else if (ObjectId.isValid(idToCheck)) return next();
  return ApiResponse.error(res, "Invalid id");
};

module.exports = { checkIdMiddleware };
