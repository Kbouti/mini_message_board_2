const {Router} = require("express");

const indexRouter = Router();




indexRouter.get("/", (req, res) => {
    // res.send("You're in the index section");
    res.render("home", {message: "Baddest node website in the webs"});
})

module.exports = indexRouter;