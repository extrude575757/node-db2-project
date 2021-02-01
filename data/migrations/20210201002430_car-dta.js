
exports.up = function(knex) {
  return knex.schema.table('cardta', c=>{
    c.increments();
    c.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.table('cardta', c=>{
      c.dropColumn('name')
  })
};
