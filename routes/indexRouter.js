const {Router} = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("You're in the index section");
})

module.exports = indexRouter;