
exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      recipe_name: 'Gourmet Cereal'
    },
    {
      recipe_name: 'Spaghetti'
    },
    {
      recipe_name: 'Turkey Sandwich'
    }
  ]);
};
