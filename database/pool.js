
// Ok ---- 
// Now we gotta access our sql database. 

const { Pool } = require("pg");


// Need to get user and password from environment variable. 
// App is deployed.... So check deployment service for local environment variable. 



module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: process.env.DB_USER,
  database: "message_board",
  password: process.env.DB_PASSWORD,
  port: 5432 // The default port
});


