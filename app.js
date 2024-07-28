const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

require("dotenv").config();


const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

// app.get("/", (req, res) => res.send("Hello, world!"));


app.use("/", indexRouter);
app.use("/new", newMessageRouter);


const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE || "development";
app.listen(PORT, () => console.log(`My first Express app - mode is ${MODE} listening on port ${PORT}!`));
