const express = require("express");

const resourcesRoutes = require("../resources/resources-routes");
const projectsRoutes = require("../projects/projects-routes");

const server = express();

server.use(express.json());

server.use("/api/resources", resourcesRoutes);
server.use("/api/projects", projectsRoutes);

module.exports = server;
