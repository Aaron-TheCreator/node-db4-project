const express = require('express');
const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res, next) => {
    Recipes.getAllRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(next)
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    Recipes.getRecipeById(id)
        .then( recipe => {
            res.status(200).json(recipe);
        })
        .catch(next)
});

router.get('/:id/steps', (req, res, next) => {
    const { id } = req.params;
    Recipes.getStepsById(id)
        .then( steps => {
            res.status(200).json(steps);
        })
        .catch(next)
});

module.exports = router;