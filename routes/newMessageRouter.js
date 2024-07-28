const {Router} = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("newMessage", {subtitle: "Create message:"});
})

module.exports = newMessageRouter;