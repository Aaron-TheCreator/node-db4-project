
exports.seed = function(knex) {
  return knex('steps').insert([
    {
      step_number: 1,
      recipe_id: 1,
      instructions: "pour cereal into a bowl of your choosing"
    },
    {
      step_number: 2,
      recipe_id: 1,
      instructions: "pour sufficient milk atop cereal until all cereal is damp and milk forms reservoir at bottom of bowl"
    },
    {
      step_number: 3,
      recipe_id: 1,
      instructions: "eat cereal with a very bourgeoisie attitude"
    },
    {
      step_number: 1,
      recipe_id: 2,
      instructions: "boil water in a large pot, add salt to water"
    },
    {
      step_number: 2,
      recipe_id: 2,
      instructions: "chop onions, bell peppers, tomatoes and mince garlic"
    },
    {
      step_number: 3,
      recipe_id: 2,
      instructions: "brown ground protein in medium to large saucepan"
    },
    {
      step_number: 4,
      recipe_id: 2,
      instructions: "add dry pasta to boiling water, boil on HIGH ~7 minutes for al dente pasta"
    },
    {
      step_number: 5,
      recipe_id: 2,
      instructions: "add chopped onions and bell peppers to ground protein, sautee on medium heat and season to taste"
    },
    {
      step_number: 6,
      recipe_id: 2,
      instructions: "combine chopped tomatoes, tomato sauce and paste to ground protein mixture. add minced garlic and dried oregano to taste, simmer until combined"
    },
    {
      step_number: 7,
      recipe_id: 2,
      instructions: "serve al dente pasta topped with ground meat sauce and parmesan cheese for garnish"
    },
    {
      step_number: 1,
      recipe_id: 3,
      instructions: "toast two (2) slices of whole-wheat bread"
    },
    {
      step_number: 2,
      recipe_id: 3,
      instructions: "wash two (2) leaves of romaine lettuce"
    },
    {
      step_number: 3,
      recipe_id: 3,
      instructions: "slice tomato into 3-4 rounds"
    },
    {
      step_number: 4,
      recipe_id: 3,
      instructions: "apply condiments to toasted bread"
    },
    {
      step_number: 5,
      recipe_id: 3,
      instructions: "on bottom slice of bread, layer slices of turkey, folding them to add height"
    },
    {
      step_number: 6,
      recipe_id: 3,
      instructions: "on top slice, add dill pickle chips, lettuce and tomato slices"
    },
    {
      step_number: 7,
      recipe_id: 3,
      instructions: "combine top and bottom half. serve"
    }
  ]);
};
