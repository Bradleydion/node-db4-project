
exports.seed = async function(knex) {
  await knex("recipe_card").insert([
    {recipes_id: 1, ingredient_id:1,ingredient_quantity: 1},
    {recipes_id:1, ingredient_id:2,ingredient_quantity: .5},
    {recipes_id:2, ingredient_id:3,ingredient_quantity: 1},
    {recipes_id:2, ingredient_id:2,ingredient_quantity: 2}
  ])
};
