// Update with your config settings.

/* 
  Each key on the exported object has the configuration for a database
  environment (dev, production, testing, etc)
*/

module.exports = {

  development: {
    client: 'sqlite3', // the DB driver
    useNullAsDefault: true, // only needed when using SQLite3
    connection: {
      filename: './data/produce.db3' // telling driver how to connect to db
    },
    migrations: {
      directory: './data/migrations'
    },
      seeds: {
        directory: './data/seeds'
      }
  }


};
