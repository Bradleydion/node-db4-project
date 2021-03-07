
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name:"Elbows"},
    {name:"Cheddar Cheese"},
    {name:"Sour Dough Bread"},
  ])
};
