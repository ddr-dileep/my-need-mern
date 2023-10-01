import axios from "axios";
const baseURL = "http://localhost:8080/api";

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Max-Age": 3600,
    "Access-Control-Expose-Headers":
      "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type",
  },
});

export default API;
