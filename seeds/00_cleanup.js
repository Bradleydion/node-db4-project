
exports.seed = async function(knex) {
  await knex("recipe_card").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
};
