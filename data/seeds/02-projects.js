exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Redo security", description: "Got hacked, need new security" },
        { name: "Empty trash" },
      ]);
    });
};
