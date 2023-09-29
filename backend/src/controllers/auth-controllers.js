const ApiResponse = require("../api/api-response");
const { hashingPassword, comparingPassword } = require("../utils");
const allModels = require("./../models");
const JWT = require("jsonwebtoken");

const registerUserController = async (req, res) => {
  try {
    const newUser = {
      ...req.body,
      password: await hashingPassword(req?.body?.password),
    };
    const userCreateRequest = new allModels.User(newUser);
    await userCreateRequest.save();
    return ApiResponse.success(res, { user: userCreateRequest });
  } catch (error) {
    return ApiResponse.catchError(res, error);
  }
};

const getCurrentUserController = async (req, res) => {
  const find_id = req.params?.id || req.body?.id;

  try {
    const user = await allModels.User.findOne({ _id: find_id });
    if (!user) return ApiResponse.error(res, { message: "User not found" }); // prettier-ignore
    return ApiResponse.success(res, {
      user: {
        userName: user?.userName,
        email: user?.email,
        todos: user?.todos,
      },
    });
  } catch (error) {
    console.log(error);
    return ApiResponse.catchError(res, error);
  }
};

const loginUserController = async (req, res) => {
  try {
    const user = await allModels.User.findOne({
      email: req.body.email,
    });
    if (!user) return ApiResponse.error(res, { message: "User not found it was already deleted" }); // prettier-ignore
    const isMatch = await comparingPassword(req.body.password, user.password);
    if (!isMatch) return ApiResponse.error(res, { message: "Invalid password" }); // prettier-ignore
    return ApiResponse.success(res, {
      token: await JWT.sign({ id: user._id }, process.env.JWT_SECRET),
      user: {
        userName: user?.userName,
        email: user?.email,
        todos: user?.todos,
      },
    });
  } catch (error) {
    return ApiResponse.catchError(res, error);
  }
};

const updateUserControllers = async (req, res) => {
  const find_id = req?.params?.id || req.body?.id;

  try {
    const user = await allModels.User.findOne({ _id: find_id });
    if (!user) return ApiResponse.error(res, { message: "User not found" }); // prettier-ignore
    user.userName = req.body.userName;
    user.email = req.body.email;
    await user.save();
    return ApiResponse.success(res, { user: user });
  } catch (error) {
    return ApiResponse.catchError(res, error);
  }
};

const deleteUserController = async (req, res) => {
  const find_id = req?.params?.id || req.body?.id;

  try {
    const user = await allModels.User.findOne({ _id: find_id });
    if (!user) return ApiResponse.error(res, { message: "User not found" }); // prettier-ignore
    await allModels.User.deleteOne({ _id: find_id });
    return ApiResponse.success(res, { message: "User deleted" });
  } catch (error) {
    return ApiResponse.catchError(res, error);
  }
};

module.exports = {
  registerUserController,
  getCurrentUserController,
  loginUserController,
  updateUserControllers,
  deleteUserController,
};
