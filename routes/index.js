const express = require("express");
const apiRoutes = require("./api");

const api = express.Router();

api.use("/api", apiRoutes);

module.exports = api;