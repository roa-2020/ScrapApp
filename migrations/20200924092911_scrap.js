exports.up = function (knex) {
  return knex.schema.createTable('scrap', table => {
    table.increments('id')
    table.string('scrap_name')
    table.string('category')
    table.string('description')
    table.string('scrap_image')
    table.string('address')
    table.integer('user_id').references('users.id')
    table.boolean('collected')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('scrap')
};