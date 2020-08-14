const db = require("../data/db-config");

module.exports = {
  getAll,
  getById,
  insert,
  getResources,
};

function getAll() {
  return db("projects");
}

function getById(id) {
  return db("projects").where({ id }).first();
}

function insert(resource) {
  return db("projects")
    .insert(resource)
    .returning("id")
    .then(([id]) => {
      return getById(id);
    });
}

function getResources(id) {
  return db("projects as p")
    .join("project-resources as pr", "p.id", "=", "pr.project_id")
    .join("resources as r", "r.id", "=", "pr.resource_id")
    .select("r.*")
    .where({ "pr.project_id": id });
}
