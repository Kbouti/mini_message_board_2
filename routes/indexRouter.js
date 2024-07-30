const {Router} = require("express");

const indexRouter = Router();


const testVariable = "test-test"

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
    res.render("home", {subtitle: "Messages:",
        messages: messages
    });
})

// **************************************************************************************************
//  export {indexRouter, messages, testVariable};
// Tried the above^^ and it broke the app. Below export syntax didn't work either. 
// The goal was to export messages to the newMessageRouter file
module.exports = indexRouter, messages, testVariable;
// **************************************************************************************************
