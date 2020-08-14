exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "PC #1" },
        { name: "Meeting room B", description: "2nd floor" },
        { name: "Jeff", description: "security consultant" },
        { name: "trashcan" },
      ]);
    });
};
