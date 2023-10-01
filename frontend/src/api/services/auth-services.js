import { registerUserAPI } from "./../apis/auth-apis";

export const registerUserService = async (data) => {
  try {
    const response = await registerUserAPI(data);
    return response?.data;
  } catch (error) {
    if (error.response) {
      return error.response.data || "An error occurred.";
    }
  }
};
