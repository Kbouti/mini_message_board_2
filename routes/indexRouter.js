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

indexRouter.post("/new", (req, res) => {

// **************************************************************************************************************
// Here's where we need to work next. 
// We need to perform a sql operation to add our new message to the database.

// **************************************************************************************************************



  const newEntry = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newEntry);
  res.render("home", { subtitle: "Messages:", messages: messages });
});

module.exports = indexRouter;
