
exports.seed = function(knex) {
  return knex('ingredients').insert([
    { ingredient_name: "milk" },
    { ingredient_name: "cereal" },
    { ingredient_name: "dry pasta"},
    { ingredient_name: "ground protein"},
    { ingredient_name: "tomato" },
    { ingredient_name: "tomato sauce" },
    { ingredient_name: "tomato paste" },
    { ingredient_name: "bell pepper" },
    { ingredient_name: "onion" },
    { ingredient_name: "fresh garlic" },
    { ingredient_name: "dried oregano" },
    { ingredient_name: " grated parmesan chesse"},
    { ingredient_name: "salt" },
    { ingredient_name: "pepper" },
    { ingredient_name: "bread" },
    { ingredient_name: "sliced turkey" },
    { ingredient_name: "mustard" },
    { ingredient_name: "mayonaise" },
    { ingredient_name: "lettuce" },
    { ingredient_name: " dill pickle" }
  ]);
};
