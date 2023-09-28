const express = require("express");
const allRouters = require("./routes");

const app = express();

// middlewares
app.use(express.json());

// all api routes
app.use("/api/auth", allRouters?.authRouters);

module.exports = app;
