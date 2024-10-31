const { Pool } = require("pg");

let host;
let database;
let user;
let password;
let port = 5432;

if ((process.env.MODE = "development")) {
  host = "localhost";
  database = "message_board";
  user = process.env.DB_USER;
  password = process.env.DB_PASSWORD;
} else if ((process.env.MODE = "deployment")) {
  host = process.env.PGHOST;
  database = process.env.PGDATABASE;
  user = process.env.PGUSER;
  password = process.env.PGPASSWORD;
}

module.exports = new Pool({
  host,
  database,
  user,
  password,
  port,
});

// ************************************************************************************************
// App has been deployed on the PaaS Adaptable. Domain name:
// https://messageboard-1.adaptable.app/

// Didn't work when I tried on 10/31.
// Redploying on railway
// ************************************************************************************************
