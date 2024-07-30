const { Router } = require("express");

const newMessageRouter = Router();




// ******************************************************************************************************
const indexRouter = require("./indexRouter")
// Our next challenge is to access the messages array which is currently in indexRouter.js
// We need to push data from req.body into our messages array. 
// ******************************************************************************************************




newMessageRouter.get("/", (req, res) => {
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
