
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cardta').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cardta').insert([
        {name: 'name1', carname: 'Nissian Titan'},
        {name: 'fred roy', carname: 'VW Bug'},
        {name: 'vandlescough daswts', carname:'Honda Civic'}
      ]);
    });
};
