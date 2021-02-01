
exports.up = function(knex) {
  return knex.schema.createTable('cardta', c=>{
    c.increments();
    c.string('name',16);
    c.string('carname',16);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cardta', c=>{
      c.dropColumn('name')
  })
};
