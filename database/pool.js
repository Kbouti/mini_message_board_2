
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





// ************************************************************************************************
// App has been deployed on the PaaS Adaptable. Domain name:
// https://messageboard-1.adaptable.app/
// ************************************************************************************************

// Next assignment: Add data persistence with a database:
// https://www.theodinproject.com/lessons/nodejs-installing-postgresql

// Creating a database "message_board"
// Next we'll create table within message_board: "messages"
// We'll need to define parameters for messages. Message needs text and a user and a time stamp

// Then we need to access our db, populate our db, and modify our db when adding messages

// create table testLogs ( id integer primary key generated always as Identity, log varchar(255) );

// This doesn't work for some reason.... Can't add multiple columns when initiating?
// create table messages ( id integer primary key generated always as Identity, Text varchar(255), User varchar(255), Added date  );

// Instead, initiate the table with just text and id, then we'll alter the table and add rows:

// ALTER TABLE table_name
// ADD column_name datatype;

// Tried that and it still isn't really liking my input...

// **************************************************************************************************************
// This should work....
// It's giving me a syntax error at or near "User". What the hell????

// CREATE TABLE Messages (
//   ID integer generated always as identity,
//   Text varchar(255),
//   User varchar(20),
//   Added datetime
// );

// CREATE TABLE Messages (
//   ID int,
//   text varchar(255),
//   user varchar(20),
//   Added datetime
// );

// ************************************************************************************************

// CREATE TABLE testTable (
//   ID int,
//   text varchar(255)
// );
// insert into testTable (text) values ('poop'),('shit'),('crap');

// This worked^^^^^
// We've created the table and added three text rows. The do not have Id's tho because we didn't explicitly provide that

// ************************************************************************************************
// CREATE TABLE Messages (
//   ID integer generated always as identity
// );

// ALTER TABLE Messages
// ADD Message VARCHAR(255);

// ALTER TABLE Messages
// ADD Author VARCHAR(20);

// ALTER TABLE Messages
// ADD Date date;

// ALTER TABLE Messages
// ADD Time time;


// So here we'd like to change datatype from data to datetime. This should work but it doesn't like DATETIME
// ALTER TABLE messages ALTER COLUMN added DATETIME;
// ALTER TABLE messages ALTER COLUMN added TIMESTAMP;
// ************************************************************************************************

// BOOOOM We've created the table and columns

// insert into messages (message, author, added, timestamp) values ('Hello World!', 'Brendan', '9/1/1995', current_timestamp);
// insert into messages (message, author, added, timestamp) values ('Hello World!', 'Kevin', current_timestamp, current_timestamp);

// and BOOOM we've inserted into it! With date and timestamp.
// ************************************************************************************************
