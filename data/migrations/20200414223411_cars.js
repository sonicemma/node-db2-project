
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.text('make');
      tbl.text('model');
      tbl.string('title');
      tbl.integer('mileage');
      tbl.integer('VIN')
        .unique()
        .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
