const express = require("express");

const resourcesRoutes = require("../resources/resources-routes");

const server = express();

server.use(express.json());

server.use("/api/resources", resourcesRoutes);

module.exports = server;
