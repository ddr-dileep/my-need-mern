const response = (res, statusCode, success, data) => {
  return res.status(statusCode).json({
    success,
    data,
  });
};

const success = (res, data) => response(res, 200, true, data);

const error = (res, data) => response(res, 400, false, data);

const serverError = (res, data) =>
  response(res, 500, false, { ...data, message: "Server error" });

const catchError = (res, error) => {
  if (error?.code === 11000) {
    const field = error?.message?.match(/index: (.*?)(?= dup key)/);
    if (field && field[1]) return ApiResponse.error(res, { error: `${field[1]?.slice( 0, -2)} is already taken. Please choose a different one.`}); // prettier-ignore
    else return ApiResponse.error(res, { error: "Duplicate key error. Please try again."  }); // prettier-ignore
  }
  return serverError(res, error);
};

const ApiResponse = { success, error, serverError, catchError };

module.exports = ApiResponse;
