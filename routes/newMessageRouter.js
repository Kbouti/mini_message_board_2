const {Router} = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("newMessage", {subtitle: "This is where you would create a new message"});
})

module.exports = newMessageRouter;