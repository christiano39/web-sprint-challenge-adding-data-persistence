const db = require("../data/db-config");

module.exports = {
  getAll,
  getById,
  insert,
};

function getAll() {
  return db("projects as p")
    .join("tasks as t", "t.project_id", "=", "p.id")
    .select(
      "t.id as id",
      "p.name as projectName",
      "p.description as projectDescription",
      "t.description as taskDescription",
      "t.notes as taskNotes",
      "t.completed as taskCompleted"
    );
}

function getById(id) {
  return db("projects as p")
    .join("tasks as t", "t.project_id", "=", "p.id")
    .select(
      "t.id as id",
      "p.name as projectName",
      "p.description as projectDescription",
      "t.description as taskDescription",
      "t.notes as taskNotes",
      "t.completed as taskCompleted"
    )
    .where({ "t.id": id })
    .first();
}

function insert(resource) {
  return db("tasks")
    .insert(resource)
    .returning("id")
    .then(([id]) => {
      return getById(id);
    });
}
