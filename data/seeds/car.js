
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
        },
        { name: 'Plate Fltfs',model:'VWfd Bug',condition:'New Factory New',
        price:'53000.00',description:'Great Bug',color:'Black',
        transmission:'Manual',wheels:'4',make:'2010',vin:'4AF32ASJ',
        mileage:'2100',status:'Instock Forsale'  
        },
        { name: 'Sid Roy',model:'22VW Bug',condition:'New Factory Old',
        price:'15000.00',description:'Great Bug',color:'Black',
        transmission:'Manual',wheels:'4',make:'2010',vin:'4AF32ASJ',
        mileage:'3200',status:'Instock Forsale'  
        },
      ]);
    });
};
