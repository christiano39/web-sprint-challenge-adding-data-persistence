exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable();
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable();
      tbl.string("description");
    })
    .createTable("project-resources", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable().defaultTo(false);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("project-resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
