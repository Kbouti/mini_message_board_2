const {Router} = require("express");

const indexRouter = Router();


const messages = [
    {
        text: "Hi there!",
        user: "Amanda",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]

indexRouter.get("/", (req, res) => {
    // res.send("You're in the index section");
    res.render("home", {subtitle: "Baddest node website in the webs",
        messages: messages
    });
})

module.exports = indexRouter;