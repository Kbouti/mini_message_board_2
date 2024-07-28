const {Router} = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.send("You've reached the new message section");
})

module.exports = newMessageRouter;