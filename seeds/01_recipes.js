
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name:"Mac n Cheese", instructions:"Put elbows in a flavored jacuzzi. Wait till they are like a straight man after 6 beers,not as straight. Then, dry them off a little. Drop in the cheese and melt it like chocolate left in your car in the middle of a texas summer, serve that noodely cheesy goodness."},
    {name: "Grilled Cheese",instructions:"take your bread and butter both sides like a ginger slathering on sunblock before hanging out on the beach. Sandwhich those babys and grill them till sunkissed skin brown. Slice in half and serve the hell out of em."}
  ])
};
