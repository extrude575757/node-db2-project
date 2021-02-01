
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cardta').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cardta').insert([
        {name: 'name1'},
        {name: 'fred roy'},
        {name: 'vandlescough daswts'}
      ]);
    });
};
