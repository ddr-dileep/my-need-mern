const ApiResponse = require("../api/api-response");
const { hashingPassword } = require("../utils");
const allModels = require("./../models");

const registerUserController = async (req, res) => {
  try {
    const newUser = {
      ...req.body,
      password: await hashingPassword(req?.body?.password),
    };
    const userCreateRequest = new allModels.User(newUser);
    await userCreateRequest.save();
    return ApiResponse.success(res, userCreateRequest);
  } catch (error) {
    return ApiResponse.catchError(res, error);
  }
};

module.exports = { registerUserController };
