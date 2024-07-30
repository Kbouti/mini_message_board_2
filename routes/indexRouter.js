const { Router } = require("express");

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

indexRouter.get("/", (req, res) => {
  // res.send("You're in the index section");
  res.render("home", { subtitle: "Messages:", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  console.log(`New message route activated`);
  res.render("newMessage", { subtitle: "Create message:" });
});

indexRouter.post("/new", (req, res) => {
  console.log(`req.body.text: ${req.body.text}`);

  // ************************************************************************************
  // Next up we need to push our new message object to the messages array
  // ************************************************************************************

  res.send("You submitted the form! ");
});

module.exports = indexRouter;
