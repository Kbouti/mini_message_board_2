const {Router} = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("newMessage", {subtitle: "Create message:"});
})

newMessageRouter.post("/", (req, res) => {
    res.send("You submitted the form! ")
    // This works!!! That's actually awesome. 
    // Now we need to access the data from that form
})


module.exports = newMessageRouter;