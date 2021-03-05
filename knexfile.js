// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.db3'
    }
  },
  pool: {
    afterCreate: (con,done) =>{
      conn.run("PRAGMA foreign_keys = ON",done)
    }
  }

};
