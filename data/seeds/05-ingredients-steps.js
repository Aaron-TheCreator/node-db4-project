
exports.seed = function(knex) {
  return knex('ingredients_steps').insert([
    {
      ingredient_amt: "serving size",
      ingredient_id: 2,
      step_id: 1
    },
    {
      ingredient_amt: "serving size",
      ingredient_id: 2,
      step_id: 2
    },
    {
      ingredient_amt: "a few pinches",
      ingredient_id: 13,
      step_id: 4
    },
    {
      ingredient_amt: "half",
      ingredient_id: 9,
      step_id: 5
    },
    {
      ingredient_amt: "half",
      ingredient_id: 8,
      step_id: 5
    },
    {
      ingredient_amt: "2",
      ingredient_id: 5,
      step_id: 5
    },
    {
      ingredient_amt: "2 cloves",
      ingredient_id: 10,
      step_id: 5
    },
    {
      ingredient_amt: "~1 lb.",
      ingredient_id: 4,
      step_id: 6
    },
    {
      ingredient_amt: "2 in. diameter or serving size",
      ingredient_id: 3,
      step_id: 7
    },
    {
      ingredient_amt: "to taste",
      ingredient_id: 13,
      step_id: 8
    },
    {
      ingredient_amt: "to taste",
      ingredient_id: 14,
      step_id: 8
    },
    {
      ingredient_amt: "previous amount",
      ingredient_id: 5,
      step_id: 9
    },
    {
      ingredient_amt: "1 can",
      ingredient_id: 6,
      step_id: 9
    },
    {
      ingredient_amt: ".25 can",
      ingredient_id: 7,
      step_id: 9
    },
    {
      ingredient_amt: "previous amount",
      ingredient_id: 10,
      step_id: 9
    },
    {
      ingredient_amt: "a few dashes, to taste",
      ingredient_id: 11,
      step_id: 9
    },
    {
      ingredient_amt: "Just say 'when' ",
      ingredient_id: 12,
      step_id: 10
    },
    {
      ingredient_amt: "2 slices",
      ingredient_id: 15,
      step_id: 11
    },
    {
      ingredient_amt: "2 leaves",
      ingredient_id: 19,
      step_id: 12
    },
    {
      ingredient_amt: "half",
      ingredient_id: 5,
      step_id: 13
    },
    {
      ingredient_amt: "a squeeze, to taste",
      ingredient_id: 17,
      step_id: 14
    },
    {
      ingredient_amt: "a light spread",
      ingredient_id: 18,
      step_id: 14,
    },
    {
      ingredient_amt: "4-6 slices",
      ingredient_id: 16,
      step_id: 15
    },
    {
      ingredient_amt: "3-4 chips",
      ingredient_id: 20,
      step_id: 16
    },
    {
      ingredient_amt: "2 leaves",
      ingredient_id: 19,
      step_id: 16
    },
    {
      ingredient_amt: "3-4 slices",
      ingredient_id: 5,
      step_id: 16
    }
    
  ])
};
