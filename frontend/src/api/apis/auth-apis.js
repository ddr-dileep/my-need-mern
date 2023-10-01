import API from "../axios";

export const registerUserAPI = async (data) => {
  return await API.post("/auth/register", data);
};
