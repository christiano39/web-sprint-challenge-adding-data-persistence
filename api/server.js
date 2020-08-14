const express = require("express");

const resourcesRoutes = require("../resources/resources-routes");
const projectsRoutes = require("../projects/projects-routes");
const tasksRoutes = require("../tasks/tasks-routes");

const server = express();

server.use(express.json());

server.use("/api/resources", resourcesRoutes);
server.use("/api/projects", projectsRoutes);
server.use("/api/tasks", tasksRoutes);

module.exports = server;
