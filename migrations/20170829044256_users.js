exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username");
    table.string("name");
    table.string("hash");
    table.integer("user_rating");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};