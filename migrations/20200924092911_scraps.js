exports.up = function (knex) {
  return knex.schema.createTable("scraps", (table) => {
    table.increments("id");
    table.string("scrap_name");
    table.string("category");
    table.string("description");
    table.string("address");
    table.decimal("latitude", [8], [6]);
    table.decimal("longitude", [9], [6]);
    table.integer("user_id").references("users.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("scraps");
};
