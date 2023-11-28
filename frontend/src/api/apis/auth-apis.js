import API from "../axios";

export const registerUserAPI = async (data) => {
  return await API.post("/auth/register", data);
};

export const loginUserAPI = async (data) => {
  return await API.post("/auth/login", data);
};
