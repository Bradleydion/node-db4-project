const e = require("express");

exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table)=>{
        table.increments("id")
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("ingredients",(table)=>{
        table.increments("id")
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("recipe_card",
    (table)=>{
        table.integer("recipes_id").notNull().references("id").inTable("recipes")
        table.integer("ingredient_id").notNull().references("id").inTable("ingredients")
        table.float("ingredient_quantity").notNull()
        table.primary(["recipes_id","ingredient_id"])
    }
    )
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("Recipe_card")
    await knex.schema.dropTableIfExists("Ingredients")
  await knex.schema.dropTableIfExists("Recipes")
};
