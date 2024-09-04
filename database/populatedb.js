#! /usr/bin/env node

const { Client } = require("pg");


require('dotenv').config();

// We can run node database/populatedb.js once to populate the app with some default messages:

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  Text VARCHAR ( 255 ),
  Author VARCHAR ( 20 ),
  Date date,
  Time time
);

INSERT INTO messages (text, author, date, time) 
VALUES
  ('Hello World!', 'Brendan', '9/1/1995', current_timestamp),
  ('Hello to you!', 'Kevin', current_timestamp, current_timestamp);
`;

// For troubleshooting, this breaks it up into steps:
const altSQL = `
CREATE TABLE IF NOT EXISTS Messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
  );

ALTER TABLE Messages
ADD Text VARCHAR(255);

ALTER TABLE Messages
ADD Author VARCHAR(20);

ALTER TABLE Messages
ADD Date date;

ALTER TABLE Messages
ADD Time time;

`;


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

