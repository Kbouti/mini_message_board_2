const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("newMessage", { subtitle: "Create message:" });
});

newMessageRouter.post("/", (req, res) => {
  console.log(`req.body.text: ${req.body.text}`);
// Success!! We've accessed the form input named "text"
// Below we simply send a response confirming the submission, but we should ultimately redirect to a view.
  res.send("You submitted the form! ");
});

module.exports = newMessageRouter;
