
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name:"Mac n Cheese"},
    {name: "Grilled Cheese"}
  ])
};
