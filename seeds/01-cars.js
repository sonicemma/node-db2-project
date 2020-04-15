
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
       { make: 'Acura', model:'ILX', vin: '1FAFP52U32G230389', title: 'Clean', mileage:'1234'},
       { make: 'Chevrolet', model:'Blazer', vin: '2G11Z5SL5F9165953', title: 'Clean', mileage:'3333'},
       { make: 'Buick', model:'Regal', vin: '1C4RJFAG8CC224767', title: 'Clean', mileage:'3414'},
       { make: 'Ford', model:'Escape', vin: 'WVGAV7AX6CW077236', mileage:'12222'},
       { make: 'GMC', model:'Siera 2500HD', vin: '2C3CCAAG8CH261807', title: 'Salvage', mileage:'23414'}
      ]);
    });
};
