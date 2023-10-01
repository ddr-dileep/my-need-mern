const express = require("express");
const allRouters = require("./routes");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// all api routes
app.use("/api/auth", allRouters?.authRouters);

module.exports = app;
