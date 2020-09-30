exports.up = function (knex) {
  return knex.schema.table('users', table => {
    table.string("profilepic");
  });
};

exports.down = function (knex) {
  return knex.schema.dropColumn("profilepic");
};