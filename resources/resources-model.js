const db = require("../data/db-config");

module.exports = {
  getAll,
  getById,
  insert,
  getProjects,
};

function getAll() {
  return db("resources");
}

function getById(id) {
  return db("resources").where({ id }).first();
}

function insert(resource) {
  return db("resources")
    .insert(resource)
    .returning("id")
    .then(([id]) => {
      return getById(id);
    });
}

// stretch

function getProjects(id) {
  return db("projects as p")
    .join("project-resources as pr", "p.id", "=", "pr.project_id")
    .join("resources as r", "r.id", "=", "pr.resource_id")
    .select("p.*")
    .where({ "pr.resource_id": id });
}
