const db = require("../data/db-config");

module.exports = {
  getAll,
  getById,
  insert,
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
