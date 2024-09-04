#! /usr/bin/env node

const { Client } = require("pg");


require('dotenv').config();


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  user VARCHAR ( 20 ),
  date date,
  time time
);

INSERT INTO messages (text, user, date, time) 
VALUES
  ('Hello World!', 'Brendan', '9/1/1995', current_timestamp),
  ('Hello to you!', 'Kevin', current_timestamp, current_timestamp);
`;

const altSQL = `
CREATE TABLE IF NOT EXISTS Messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
  );

ALTER TABLE Messages
ADD text VARCHAR(255);

ALTER TABLE Messages
ADD user VARCHAR(20);

ALTER TABLE Messages
ADD Date date;

ALTER TABLE Messages
ADD Time time;

`;


// It still isn't liking "user"......




async function main() {
  console.log("seeding...");


  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

