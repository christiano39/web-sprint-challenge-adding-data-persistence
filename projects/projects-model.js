const db = require("../data/db-config");

module.exports = {
  getAll,
  getById,
  insert,
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
