
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { name: 'Fred Roy',model:'VW Bug',condition:'New Factory New',
        price:'5000.00',description:'Great Bug',color:'Black',
        transmission:'Manual',wheels:'4',make:'2010',vin:'4AF32ASJ',
        mileage:'200',status:'Instock Forsale'  
        }
      ]);
    });
};
