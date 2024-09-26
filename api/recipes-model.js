const db = require('../data/db-config.js');

function getAllRecipes() {
    return db('recipes');
}

async function getRecipeById(id) {
    const data = await db.select('*').from('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .join('ingredients_steps as ist', 's.step_id', 'ist.step_id')
        .leftJoin('ingredients as i', 'ist.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', id);
        
    const mutDta = {
        recipe_id: data[0].recipe_id,
        recipe_name: data[0].recipe_name,
        created_at: data[0].created_at,
        steps: [data.map((obj) => {
            return {
                step_id: obj.step_id,
                step_number: obj.step_number,
                step_instructions: obj.instructions,
                ingredients: {
                    ingredient: obj.ingredient_name,
                    quantity: obj.ingredient_amt
                }
            }
        })]
    }
    return mutDta;
}

async function getStepsById(id) {
    const data = await db.select('*').from('steps as s')
        .where('s.recipe_id', id);

    return data;    
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getStepsById
};

// {
//     "recipe_id" : 1,
//     "recipe_name": "Spaghetti Bolognese",
//     "created_at": "2021-01-01 08:23:19.120",
//     "steps": [
//       {
//         "step_id": 11,
//         "step_number": 1,
//         "step_instructions": "Put a large saucepan on a medium heat",
//         "ingredients": []
//       },
//       {
//         "step_id": 12,
//         "step_number": 2,
//         "step_instructions": "Add 1 tbsp olive oil",
//         "ingredients": [
//           { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//         ]
//       },
//     ]
//   }

// SELECT *
// FROM recipes as r
// JOIN steps as s
// ON r.recipe_id = s.recipe_id
// LEFT JOIN ingredients_steps as ist
// ON s.step_id = ist.step_id
// LEFT JOIN ingredients as i
// ON ist.ingredient_id = i.ingredient_id
// WHERE r.recipe_id = 2;