const { Router } = require("express");

const newMessageRouter = Router();



// ******************************************************************************************************
const indexRouter = require("./indexRouter")

let messages = indexRouter.messages;
let testVariable = indexRouter.testVariable;

// Our next challenge is to access the messages array which is currently in indexRouter.js
// We need to push data from req.body into our messages array. 

// Based on what I see in the first mini message board project the the /new route and everything else in this file is actually just combined into the indexRouter file..
// Likely next step is to just combine this into the indexRouter file.

// ******************************************************************************************************




newMessageRouter.get("/", (req, res) => {

console.log(`New message route activated`);
console.log(`messages: ${messages}`);
console.log(`testVariable: ${testVariable}`);


  res.render("newMessage", { subtitle: "Create message:" });
});

newMessageRouter.post("/", (req, res) => {
  console.log(`req.body.text: ${req.body.text}`);
  console.log(`indexRouter: ${indexRouter}`);
// Success!! We've accessed the form input named "text"
// Below we simply send a response confirming the submission, but we should ultimately redirect to a view.
  res.send("You submitted the form! ");
});

module.exports = newMessageRouter;
