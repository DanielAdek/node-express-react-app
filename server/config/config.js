const db = require('dotenv').config();
const { DATABASE_URL } = db;

module.exports = {
  development: {
    use_env_variable: DATABASE_URL
  },
  test: {
    username: "daniel",
    password: "a.kdan11111",
    database: "todosdb",
    host: "127.0.0.1",
    dialect: "postgres"
  }
}