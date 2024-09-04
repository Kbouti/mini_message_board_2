const { Router } = require("express");

const pool = require("../database/pool");
const queries = require("../database/queries");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", async (req, res) => {
  const dbMessages = await queries.getAllMessages();
  // Excellent. We're using messages from our database to render in our views.
  res.render("home", { subtitle: "Messages:", messages: dbMessages });
});

indexRouter.get("/new", (req, res) => {
  console.log(`New message route activated`);
  res.render("newMessage", { subtitle: "Create message:" });
});

indexRouter.post("/new", async (req, res) => {

// **************************************************************************************************************
// Next up we perform a sql operation (imported from database/queries) to create a new row in our table
// See database/queries for current issue
// **************************************************************************************************************



  const newEntry = {
    text: req.body.text,
    author: req.body.user,
    date: new Date(),
    time: new Date()
  };
  
  // messages.push(newEntry);
const response = await queries.createRow(newEntry);
const newMessages = await queries.getAllMessages();



  res.render("home", { subtitle: "Messages:", messages: newMessages });
});

module.exports = indexRouter;
