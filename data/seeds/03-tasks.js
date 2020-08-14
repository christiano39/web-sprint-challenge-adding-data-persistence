exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { project_id: 1, description: "hire Jeff the consultant" },
        { project_id: 1, description: "do whatever jeff says" },
        {
          project_id: 1,
          description: "pay Jeff",
          notes: "Jeff requires at least $4",
        },
        { project_id: 2, description: "remove trash from trashcan" },
        {
          project_id: 2,
          description: "take trash to dumpster",
          notes: "dumpster is on east side of the building",
        },
      ]);
    });
};
