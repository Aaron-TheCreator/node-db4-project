
exports.up = function(knex) {
  return (
      knex.schema
      .createTable('recipes', tbl => {
          tbl.increments('recipe_id');

          tbl.string('recipe_name', 120).notNullable();

          tbl.timestamp('created_at').defaultTo(knex.fn.now());
      })
      .createTable('ingredients', tbl => {
          tbl.increments('ingredient_id');

          tbl.string('ingredient_name').notNullable().unique();
      })
      .createTable('steps', tbl => {
          tbl.increments('step_id');

          tbl.integer('step_number').notNullable();

          tbl.string('instructions', 1024).notNullable();

          tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes.recipe_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

      })
      .createTable('ingredients_steps', tbl => {
          tbl.increments('is_id');

          tbl.string('ingredient_amt',100).notNullable();

          tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients.ingredient_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

          tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('steps.step_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
      })
  )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists('ingredients_steps')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
  );
};
